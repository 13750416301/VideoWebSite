<template>
  <!-- 导航栏 -->
  <div class="nav-bar">
    <div class="content">
      <ul>
        <li><a class="title" @click="goHomePage">GiriGiri</a></li>
        <li><a @click="goHomePage">
            <Icon type="ios-home" size="25" style="margin-right:5px" />首页</a></li>
        <li><a @click="goVideoList">
            <Icon type="logo-youtube" size="25" style="margin-right:5px" />视频专区</a></li>
        <li><a @click="goImageList">
            <Icon type="ios-images" size="25" style="margin-right:5px" />美图专区</a></li>
        <li><a @click="goArticleList">
            <Icon type="ios-book-outline" size="25" style="margin-right:5px" />文章专区</a></li>
      </ul>
      <ul class="login-tab">
        <li class="login-btn">
          <a v-if="isLogin" @click="goSpace">
            <Icon type="ios-contact" size="30" style="margin-right:5px" />
            {{userData.authorName}}
          </a>
          <a v-else @click="goLogin">
            <Icon type="ios-contact" size="30" style="margin-right:5px" />
            登陆
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'navbar',
  created() {
    this.getUser()
  },
  data () {
    return {
      userData: null,
      userName: null,
      isLogin: false
    }
  },
  methods: {
    goHomePage () {
      this.$router.push('/')
    },
    goLogin () {
      this.$router.push('/login')
    },
    goVideoList () {
      this.$router.push('/VideoList')
    },
    goImageList () {
      this.$router.push('/ImageList')
    },
    goArticleList() {
      this.$router.push('/ArticleList')
    },
    goSpace() {
      this.$router.push('/Space')
    },
    getUser() {
      axios.get('http://119.23.46.237:3000/getUser').then(res => {
        if(res.data.code === 0 && res.data.data) {
          for(let i in res.data.data) {
            this.isLogin = true
          }
          // this.isLogin = true
          this.userData = res.data.data
          console.log(this.userData)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  font-family: "Audiowide";
  text-align: center;
  color: #fff;
  font-size: 20px;
  transition: all 1.5s ease;
}
.nav-bar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  background-color: rgba(26, 175, 255, 1);
}
.content {
  width: 1080px;
  height: 100%;
  margin: 0 auto;
}

.content ul li {
  text-align: center;
  padding: 0 15px;
  display: block;
  width: 125px;
  float: left;
}

.content ul li:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.3s;
}

.login-tab {
  float: right;
  display: block;
  width: 300px;
}

.login-tab .login-btn {
  display: block;
  width: 300px;
  text-align: right;
}

.content ul li a {
  display: block;
  text-align: right;
  height: 100%;
  color: #fff;
}
</style>
