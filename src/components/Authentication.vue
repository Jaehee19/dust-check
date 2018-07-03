<template>
  <div class="authentication">
    <div class="login-wrap">
      <p class="control has-icon">
        <input
          v-model="email"
          class="input" type="email" placeholder="Email"
        >
        <i class="fa fa-envelope"></i>
      </p>
      <p class="control has-icon">
        <input
          v-model="password"
          class="input" type="password" placeholder="Password"
        >
        <i class="fa fa-lock"></i>
      </p>
      <p class="control control-btn">
        <button
          @click="login(email, password)"
          v-if="authType==='login'"
          class="button is-success"
        >
          Log in
        </button>
        <button
        @click="signup(email, password)"
          v-else
          class="button is-success"
        >
          Sign up
        </button>
      </p>
    </div>
    <div
      v-if="authType==='login'"
      class="signup-wrap"
    >
      <p class="control control-btn">
        <button
          @click="toSignup"
          class="button is-primary"
        >
          Sign up
        </button>
      </p>
    </div>
  </div>

</template>

<script>
import firebase from '../firebase/firebase'
export default {
  data: function () {
    return {
      email: '',
      password: ''
    }
  },
  props: ['authType'],
  methods: {
    toSignup () {
      this.$router.push({name: 'Signup'})
    },
    signup (email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        console.log('resist success')
        this.authType = 'login'
        this.$notify.open({
          content: 'Sign up Success',
          icon: 'smile-o',
          placement: 'left-center',
          transition: 'bounce',
          type: 'primary'
        })
      }).catch((error) => {
        const errorMessage = error.message
        this.$notify.open({
          content: errorMessage,
          icon: 'smile-o',
          placement: 'left-center',
          transition: 'bounce',
          type: 'danger'
        })
      })
    },
    login (email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
        this.$store.dispatch('login')
        this.$router.push({name: 'Main'})
      }).catch((error) => {
        // const errorCode = error.code
        const errorMessage = error.message
        this.$notify.open({
          content: errorMessage,
          icon: 'smile-o',
          placement: 'left-center',
          transition: 'bounce',
          type: 'danger'
        })
      })
    }
  }
}

</script>

<style lang="less" scoped>
  .authentication {
    box-sizing: border-box;
    width: 80%;
    max-width: 450px;
    border: 1px solid #dadada;
    border-radius: 3px;
    margin: 0 auto;
    padding: 20px;
    background: #fff;
    &>input,
    button {
      display: block;
    }
    .control-btn button {
      width: 100%;
    }
    .signup-wrap {
      border-top: 1px solid #dadada;
      margin-top: 10px;
      padding-top: 10px;
    }
  }

</style>
