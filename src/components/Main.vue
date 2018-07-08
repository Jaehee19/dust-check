<template>
  <div class="main-wrap">
    <dust-state
      v-if="isLoggedIn"
    ></dust-state>
    <div v-if="!isLoggedIn">
      <h1>
        <span class="icon">
          <i class="fa fa-cloud"></i>
        </span>
        <span class="text">미세먼지 체크</span>
      </h1>
      <div class="athentication">
        <auth-box :authType="login"></auth-box>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from '../firebase/firebase.js'
import AuthBox from './Authentication'
import DustState from './DustState'
import { mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      login: 'login'
    }
  },
  components: {
    authBox: AuthBox,
    dustState: DustState
  },
  computed: {
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  },
  created () {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('is logged in')
        this.$store.commit('LOGIN')
      } else {
        console.log('log out')
      }
    })
  }
}

</script>

<style lang="less" scoped>
  .main-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  h1 {
    margin-bottom: 20px;
    padding: 0 20px;
    font-size: 60px;
    font-weight: bold;
    word-break: keep-all;
    color: #3c81df;
    .icon {
      width: auto;
      height: auto;
      font-size: 160px;
      line-height: 160px;
    }
    &>span {
      display: block;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 45px;
      .icon {
        font-size: 120px;
        line-height: 120px;
      }
    }
  }

</style>
