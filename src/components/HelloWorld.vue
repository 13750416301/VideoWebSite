<template>
  <div class="hello">
    <!-- video element -->
    <vue-plyr class="video">
      <video poster="poster.png" src="https://www.w3school.com.cn/i/movie.ogg">
        <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" size="720">
        <source src="https://www.w3school.com.cn/i/movie.ogg" type="video/ogg" size="1080">
        <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
      </video>
    </vue-plyr>
    <Button @click="go">点我返回</Button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    go () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
