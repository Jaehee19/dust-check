<template>
  <div @click="setSubDustState(sido)" class="dust-item">
    <div class="sido-name">
      {{sido}}
      <span v-if="pending" class="button is-primary is-loading">Loading</span>
      <span class="data-time">
        {{parseDataTime(dataTime[0])}}
      </span>
    </div>
    <div
      class="value-pm10"
      v-bind:class="getStateValue('PM10', parseValueStr(valuePM10[0])).stateClass"
    >
      <span class="dust-state-icon">
        <i class="material-icons">
          {{getStateValue('PM10', parseValueStr(valuePM10[0])).icon}}
        </i>
      </span>
      <span class="dust-state-desc">
        미세먼지
        <br>
        <div v-if="!parseValueStr(valuePM10[0])">
          <span>No data</span>
        </div>
        <div v-else>
          <span class="pm-value">{{parseValueStr(valuePM10[0])}}</span> ㎍/m³
        </div>
      </span>
    </div>
    <div
      class="value-pm25"
      v-bind:class="getStateValue('PM25', parseValueStr(valuePM25[0])).stateClass"
    >
      <span class="dust-state-icon">
        <i class="material-icons">
          {{getStateValue('PM25', parseValueStr(valuePM25[0])).icon}}
        </i>
      </span>
      <span class="dust-state-desc">
        초미세먼지
        <br>
        <div v-if="!parseValueStr(valuePM25[0])">
          <span>No data</span>
        </div>
        <div v-else>
          <span class="pm-value">{{parseValueStr(valuePM25[0])}}</span> ㎍/m³
        </div>
      </span>
    </div>
    <sub-dust-state
      :sidoName="sido"
      :isShow="isShow"
      :subDustData="subDustData"
    ></sub-dust-state>
  </div>
</template>

<script>
import SubDustState from './SubDustState'
export default {
  data () {
    return {
      isShow: false,
      pending: false,
      subDustData: null
    }
  },
  components: {
    SubDustState: SubDustState
  },
  props: ['sido', 'valuePM10', 'valuePM25', 'dataTime'],
  methods: {
    setSubDustState (sidoName) {
      this.pending = true
      if (this.$ls.get(sidoName)) {
        this.isShow = true
        this.subDustData = this.$ls.get(sidoName)
        // console.log('HAS LS DATA')
        this.pending = false
      } else {
        this.$http.get(`/dust?subpm=${sidoName}`).then((result) => {
          const date = new Date()
          this.$ls.set(
            sidoName,
            result.data.response.body[0].items[0],
            date.getMinutes() > 30 ? 60 * 30 * 1000 : 60 * 60 * 1000
          )
          this.isShow = true
          this.subDustData = this.$ls.get(sidoName)
          // console.log('NO LS DATA')
          this.pending = false
        }).catch(err => {
          console.log(err)
          this.hasProblem = true
        })
      }
    },
    parseValueStr (str) {
      return parseInt(str.replace(/"/, ''))
    },
    parseDataTime (str) {
      return str.replace(/....-/, '') + ' 기준'
    },
    getStateValue (pmType, pmRate) {
      if (pmRate <= (pmType === 'PM10' ? 30 : 15)) {
        return {
          icon: 'sentiment_very_satisfied',
          state: '좋음',
          stateClass: 'state-very-good'
        }
      } else if (pmRate <= (pmType === 'PM10' ? 80 : 35)) {
        return {
          icon: 'sentiment_satisfied',
          state: '보통',
          stateClass: 'state-good'
        }
      } else if (pmRate <= (pmType === 'PM10' ? 150 : 75)) {
        return {
          icon: 'sentiment_dissatisfied',
          state: '나쁨',
          stateClass: 'state-bad'
        }
      } else {
        return {
          icon: 'sentiment_very_dissatisfied',
          state: '매우-나쁨',
          stateClass: 'state-very-bad'
        }
      }
    }
  }
}

</script>

<style lang="less" scoped>
  .dust-item {
    display: flex;
    flex-wrap: wrap;
    border-radius: 5px;
    margin: 0 10px 20px;
    padding: 10px;
    width: 280px;
    background: #fbfbfb;
    border: 1px solid #d2d2d2;
    cursor: pointer;
    .sido-name {
      position: relative;
      width: 100%;
      margin: 5px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      font-size: 30px;
      font-weight: 700;
      line-height: 33px;
      text-align: left;
      .button.is-loading{
        padding: 0;
        width: 32px;
        background: transparent;
        &:after{
          margin:0;
          border: 3px solid #dbdbdb;
          width: 24px;
          height: 24px;
          top:3px;
          left:3px;
          border-color: transparent transparent #909090 #909090!important;
        }
      }
    }
    .data-time{
      position: absolute;
      bottom: 5px;
      right: 0;
      font-size: 13px;
      color: #919191;
    }
    .dust-state-icon i {
      font-size: 40px;
    }
    .value-pm10,
    .value-pm25 {
      display: flex;
      border-radius: 5px;
      width: 50%;
      padding: 10px 0;
      flex-flow: column;
      &.state-very-good{
        color: #3c81df;
      }
      &.state-good{
        color: #049805;
      }
      &.state-bad{
        color: orange
      }
      &.state-very-bad{
        color: brown
      }
    }
    .pm-value{
      font-size: 15px;
      font-weight: 700;
    }
  }

  @media (max-width: 768px) {
    .dust-item {
      width: 100%;
    }
  }

</style>
