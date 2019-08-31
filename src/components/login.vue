<template>
  <div class="login">
    <div class="loginForm">
      <form action="http://119.23.46.237:3000/login" method="post">
        账号:
        <input type="text" name="username" v-model="username"><br>
        密码:
        <input type="password" name="password" v-model="password" style="letter-spacing: 5px;"><br>
        <Button type="submit" @click="login" size="large" style="width: 100px;" ghost>登陆</Button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      username: null,
      password: null
    }
  },
  components: {
  },
  methods: {
    comfirmLogin () {
    },
    login() {
      axios.post('http://119.23.46.237:3000/login', {
        username: this.username,
        password: this.password
      }).then(res => {
        console.log('haha')
        this.$router.push('/')
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  display: block;
  /* margin: 0;
  padding: 0; */
  padding: 200px 0 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-attachment: fixed;
  background-image: url("../assets/dateALive.jpg");
}
.loginForm {
  width: 500px;
  height: 300px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
  border: 1px solid #fff;
}

form {
  width: 350px;
  height: 200px;
  margin-top: 70px;
  color: #fff;
  font-size: 15px;
  line-height: 55px;
}

form input {
  margin-left: 15px;
  height: 35px;
  text-indent: 10px;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 5px;
  letter-spacing: 5px;
}
</style>
