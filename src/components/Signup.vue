<template>
  <div class="signup-wrap">
    <h2>SIGN UP</h2>
    <auth-box
      :authType="signup"
    ></auth-box>
  </div>
</template>
<script>
import AuthBox from './Authentication'
export default {
  data () {
    return {
      signup: 'signup'
    }
  },
  components: {
    authBox: AuthBox
  },
  created () {
    if (this.$store.state.isLoggedIn) {
      this.$router.push({name: 'Main'})
    }
  }

}

</script>
<style lang="less" scoped>
  .signup-wrap {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 40px;
    word-break: keep-all;
    color: #3c81df;
  }

</style>
