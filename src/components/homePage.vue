<template>
  <div class="homePage">
    <Navbar></Navbar>
    <!-- video element -->
    <vue-plyr class="video">
      <video poster="poster.png" src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4">
        <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="720">
        <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="1080">
        <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
      </video>
    </vue-plyr>
    <Button @click="go">点我跳转</Button>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  name: 'homePage',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Navbar
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
.homePage {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
}
.video {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
