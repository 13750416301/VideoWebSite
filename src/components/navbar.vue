<template>
  <div class="nav-bar">
    <div class="content">
      <ul>
        <li><a href="#">
            <Icon type="ios-home" size="25" style="margin-right:5px" />首页</a></li>
        <li><a href="#">视频专区</a></li>
        <li><a href="#">美图专区</a></li>
        <li><a href="#">文章专区</a></li>
      </ul>
      <ul class="login-tab">
        <li class="login-btn">
          <a href="#">
            <Icon type="ios-contact" size="30" style="margin-right:5px" />
            登陆
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      theme1: 'light'
    }
  },
  methods: {
    go () {
      this.$router.push('/HelloWorld')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-bar {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 15px;
  background-color: rgba(26, 175, 255, 1);
}
.content {
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}

.content ul li {
  text-align: center;
  padding: 0 15px;
  display: block;
  width: 100px;
  float: left;
}

.content ul li:hover {
  background-color: rgba(255, 255, 255, 0.3);
  transition: 0.3s;
}

.login-tab {
  float: right;
}

.login-btn {
  width: 150px;
}

.content ul li a {
  display: block;
  height: 100%;
  color: #fff;
}
</style>
