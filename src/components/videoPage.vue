<template>
  <!-- 首页 -->
  <div class="videoPage">
    <Navbar></Navbar>
    <!-- video element -->
    <div class="videoArea">
      <div class="video-head">
        <div class="videoTitle">狂三威风堂堂</div>
        <div class="videoType">视频 >> 分类 >> AMV</div>
      </div>
      <div class="video-content">
        <vue-plyr class="video">
          <video poster="poster.png" src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4">
            <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="480">
            <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="720">
            <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="1080">
            <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
          </video>
        </vue-plyr>
      </div>
    </div>

  </div>
</template>

<script>
import Navbar from '@/components/navbar'
export default {
  name: 'homePage',
  data () {
    return {
      active: ''
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
.videoPage {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
}
.videoArea {
  width: 1080px;
  height: 800px;
  margin: 10px auto;
  background-color: #fff;
}
.video-head {
  padding: 10px 0px;
  width: 800px;
  margin: 0 auto;
}

.videoTitle {
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
}

.videoType {
  line-height: 24px;
}
.video {
  width: 800px;
  height: 600px;
  margin: 0 auto;
}
</style>
