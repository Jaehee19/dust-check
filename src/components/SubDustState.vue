<template>
  <modal :title="sidoName" :width="520" :is-show="isShow" transition="fadeDown" @close="closeModal" :show-footer="false">
    <div>
      <div class="sub-dust-wrap" v-for="(item, index) in subDust" :key='index'>
        <div class="city-name">
          {{ item.cityName[0] }}
          <span class="data-time">{{ item.dataTime[0].replace(/....-/,"") }} 기준</span>
        </div>
        <div class="dust-value">
          <span class="val10" v-bind:class="$parent.getStateValue('PM10', parseValueStr(item.pm10Value[0])).stateClass">
            미세먼지 :
            <span v-if="!parseValueStr(item.pm10Value[0])">
              No data
            </span>
            <span v-else>
              {{ parseValueStr(item.pm10Value[0])}} ㎍/m³
            </span>
          </span>
          <span class="val25" v-bind:class="$parent.getStateValue('PM25', parseValueStr(item.pm25Value[0])).stateClass">
            초미세먼지 :
            <span v-if="!parseValueStr(item.pm25Value[0])">
              No data
            </span>
            <span v-else>
              {{ parseValueStr(item.pm25Value[0])}} ㎍/m³
            </span>
          </span>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {
    subDust () {
      if (this.$props.isShow) {
        const data = this.$props.subDustData
        return data.item.filter(item => data.item[0].dataTime[0] === item.dataTime[0])
      }
    }
  },
  props: ['sidoName', 'isShow', 'subDustData'],
  methods: {
    parseValueStr (str) {
      return parseInt(str.replace(/"/g, ''))
    },
    closeModal () {
      this.$parent.isShow = false
    }
  }
}

</script>

<style lang="less">
.modal.align-baseline.is-active{
  align-items: center;
}

.modal.align-baseline .modal-card {
  margin: 0 20px;
  max-height: 80%;
}

.modal-card-title {
  font-size: 22px;
  font-weight: bold;
}

.sub-dust-wrap {
  display: flex;
  flex-flow: column;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #eaeaea;
  .city-name {
    padding-bottom: 8px;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    .data-time {
      font-size: 12px;
      color: #919191;
    }
  }
  .dust-value {
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    .val10,
    .val25 {
      padding: 5px 0;
      width: 48%;
      border-radius: 2px;
      font-weight: bold;
      &.state-very-good {
        color: #3c81df;
      }
      &.state-good {
        color: #049805;
      }
      &.state-bad {
        color: orange
      }
      &.state-very-bad {
        color: brown
      }
    }
  }
}
</style>
