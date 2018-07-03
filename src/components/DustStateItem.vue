<template>
  <div class="dust-item">
    <div class="sidoName">
      {{sido}}
      <span class="dataTime">
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
        <span class="pm-value">{{parseValueStr(valuePM10[0])}}</span> ㎍/m³
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
        <span class="pm-value">{{parseValueStr(valuePM25[0])}}</span> ㎍/m³
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  created () {
    // console.log(this.valuePM10)
  },
  props: ['sido', 'valuePM10', 'valuePM25', 'dataTime'],
  methods: {
    parseValueStr (str) {
      return parseInt(str.replace(/"/, ''))
    },
    parseDataTime (str) {
      return str.replace(/....-/, '') + ' 기준'
    },
    getStateValue (pmType, pmRate) {
      if (pmRate < (pmType === 'PM10' ? 30 : 15)) {
        return {
          icon: 'sentiment_very_satisfied',
          state: '좋음',
          stateClass: 'state-very-good'
        }
      } else if (pmRate < (pmType === 'PM10' ? 80 : 35)) {
        return {
          icon: 'sentiment_satisfied',
          state: '보통',
          stateClass: 'state-good'
        }
      } else if (pmRate < (pmType === 'PM10' ? 150 : 75)) {
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
    .sidoName {
      position: relative;
      width: 100%;
      margin: 5px;
      padding-bottom: 10px;
      border-bottom: 1px solid #eee;
      font-size: 30px;
      font-weight: 700;
      line-height: 33px;
      text-align: left;
    }
    .dataTime{
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
        color: #049805;
      }
      &.state-good{
        color: #275eff;
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
