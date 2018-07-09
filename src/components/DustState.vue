<template>
  <div class="dust-state">
    <div class="top-bar">
      <h1>
        <span class="icon">
          <i class="fa fa-cloud"></i>
        </span>
        <span class="text">미세먼지 체크</span>
      </h1>
      <button
        @click="logout"
        class="button"
      >
        log out
      </button>
    </div>
    <div class="contents">
      <span
        v-if="hasProblem"
        class="error-text"
      >
        API 에러<br>
        잠시후 다시 접속해 주세요.
      </span>
      <div
        class="dust-state-items"
      >
        <div class="dust-info">
          <div class="info-PM10">
            <span class="info-type">미세먼지</span>
            <div class="info-items">
              <span>좋음<br>~30㎍/m³</span>
              <span>보통<br>~80㎍/m³</span>
              <span>나쁨<br>~150㎍/m³</span>
              <span>매우나쁨<br>151㎍/m³~</span>
            </div>
          </div>
          <div class="info-PM25">
            <span class="info-type">초미세먼지</span>
            <div class="info-items">
              <span>좋음<br>~15㎍/m³</span>
              <span>보통<br>~35㎍/m³</span>
              <span>나쁨<br>~75㎍/m³</span>
              <span>매우나쁨<br>76㎍/m³~</span>
            </div>
          </div>
        </div>
        <dust-state-item
          v-if="dustData.PM25"
          v-for="( valuePM10, key ) of dustData.PM10" :key="key"
          :sido="sidoName[key]"
          :valuePM10="valuePM10"
          :valuePM25="dustData.PM25[key]"
          :dataTime="dustData['PM10__dataTime']"

          @click="setSubDustState(key)"
        >
        </dust-state-item>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase/firebase'
import DustStateItem from './DustStateItem'

export default {
  name: 'dust-state',
  data () {
    return {
      hasProblem: false,
      dustDataName: 'dustData',
      dustData: {
        PM10: null,
        PM25: null
      },
      sidoName: {
        seoul: '서울',
        busan: '부산',
        daegu: '대구',
        incheon: '인천',
        gwangju: '광주',
        daejeon: '대전',
        ulsan: '울산',
        gyeonggi: '경기',
        gangwon: '강원',
        chungbuk: '충북',
        chungnam: '충남',
        jeonbuk: '전북',
        jeonnam: '전남',
        gyeongbuk: '경북',
        gyeongnam: '경남',
        jeju: '제주',
        sejong: '세종'
      }
    }
  },
  components: {
    DustStateItem: DustStateItem
  },
  created () {
    this.setDustState('PM10')
    this.setDustState('PM25')
  },
  mounted () {
    this.entry = true
  },
  methods: {
    setDustState (pm) {
      if (!pm === 'PM10' || !pm === 'PM25') {
        console.log('setDustState Function params check')
        return false
      }

      if (this.$ls.get(this.dustDataName + pm)) {
        this.parseDustData(pm)
      } else {
        this.$http.get(`/dust?pm=${pm}`).then((result) => {
          // console.log(result)
          const date = new Date()
          this.$ls.set(
            this.dustDataName + pm,
            result.data.response.body[0].items[0].item[0],
            date.getMinutes() > 30 ? 60 * 30 * 1000 : 60 * 60 * 1000
          )
          this.parseDustData(pm)
        }).catch(err => {
          console.log(err)
          this.hasProblem = true
        })
      }
    },
    parseDustData (pm) {
      this.dustData[pm] = {}
      this.dustData[pm + '__dataTime'] = this.$ls.get(this.dustDataName + pm).dataTime
      for (const [key] of Object.entries(this.sidoName)) {
        this.dustData[pm][key] = this.$ls.get(this.dustDataName + pm)[key]
      }
    },

    logout () {
      firebase.auth().signOut().then(() => {
        this.$store.commit('LOGOUT')
        this.$nextTick(() => {
          this.isLoggedIn = this.$store.state.isLoggedIn
        })
      })
    }
  }
}

</script>

<style lang="less" scoped>
  .dust-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }
  .top-bar{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 50px;
    background: #3c81df;
    color: #fff;
    font-weight: bold;
    h1{
      height: 20px;
      &>span{
        font-size: 20px;
        line-height: 20px;
      }
    }
  }
  .contents{
    padding-top: 20px;
    height: 100%;
    overflow-y: auto;
    .dust-state-items{
      display: flex;
      flex-wrap: wrap;
      margin: 0 auto;
      max-width: 900px;
      justify-content: center;
    }
    .dust-info{
      margin: 20px auto;
      padding: 0 20px;
      width: 100%;
      max-width: 900px;
      text-align: left;
      .info-type{
        display: block;
        padding: 10px 0;
        font-size: 14px;
        font-weight: 700;
      }
      .info-items{
        display: flex;
        margin-bottom: 10px 0;
        font-size: 12px;
      }
      .info-items > span{
        position: relative;
        width: 25%;
        padding: 7px 0;
        &:before{
          display: block;
          position: absolute;
          content:"";
          top:0;
          width: 100%;
          height: 3px;
          background: #000;
        }
        &:nth-of-type(1):before{
          background: #3c81df;
        }
        &:nth-of-type(2):before{
          background: #049805;
        }
        &:nth-of-type(3):before{
          background: orange
        }
        &:nth-of-type(4):before{
          background: brown
        }
      }
    }
  }
</style>
