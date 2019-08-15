<template>
  <!-- 首页 -->
  <div class="homePage">
    <Navbar></Navbar>
    <div class="homeImage">
      <div class="homeImageLeft">
        <img src="../assets/Kotori.png" />
      </div>
      <div class="homeImageRight">
        <div class="imageRight1">
          <img src="../assets/cluemi.jpg" />
        </div>
        狂三天下第一
        <div class="imageRight2">
          <img src="../assets/cluemi.jpg" />
        </div>
        狂三天下第一
      </div>
    </div>
    <!-- video element -->
    <!-- <vue-plyr class="video">
      <video poster="poster.png" src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4">
        <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="720">
        <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="1080">
        <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
      </video>
    </vue-plyr>
    <Button @click="go">点我跳转</Button> -->
    <div class="videoArea">
      <Icon type="logo-youtube" color="#1AAFFF" size="25" style="margin-right:5px" />视频专区
      <span>更多 >>></span>
      <div class="videoArea-content">
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          狂三威风堂堂
        </div>
      </div>
    </div>
    <div class="videoArea">
      <Icon type="ios-images" color="#1AAFFF" size="25" style="margin-right:5px" />美图专区
      <span>更多 >>></span>
      <div class="videoArea-content">
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          狂三威风堂堂
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          狂三威风堂堂
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import VideoHover from '@/components/videoHover'
export default {
  name: 'homePage',
  data () {
    return {
      active: ''
    }
  },
  components: {
    Navbar,
    VideoHover
  },
  methods: {
    go () {
      this.$router.push('/HelloWorld')
    },
    enter () {
      this.active = 'display: flex;'
    },
    leave () {
      this.active = 'display: none;'
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
  /* height: 100%;
  width: 100%; */
  background-color: #efefef;
}
.homeImage {
  background-color: #fff;
  height: 400px;
  width: 1080px;
  margin: 10px auto 0;
  padding: 3px 3px;
}

.homeImageLeft {
  float: left;
  width: 690px;
  height: 390px;
  border: 1px solid #efefef;
}

.homeImageLeft img {
  width: 683px;
  height: 384px;
}

.homeImageRight {
  float: left;
  width: 380px;
  height: 380px;
  text-align: center;
  color: rgba(26, 175, 255, 1);
  font-size: 15px;
}

.imageRight1,
.imageRight2 {
  margin: 0 auto;
  width: 360px;
  height: 170px;
  line-height: 170px;
  border: 1px solid #efefef;
  text-align: center;
}

.homeImageRight img {
  display: block;
  width: 95%;
  height: 95%;
}

.videoArea {
  margin: 10px auto;
  width: 1080px;
  height: 500px;
  background-color: #fff;
  padding: 20px 20px;
  font-size: 15px;
  color: #1aafff;
}

.videoArea span {
  display: block;
  float: right;
  cursor: pointer;
}

.videoArea-content {
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #efefef;
  text-align: center;
}

.videoArea-content .video-brid {
  float: left;
  width: 320px;
  height: 200px;
  text-align: center;
  /* background-color: #1aafff; */
}

.videoArea-content .video-brid .video-img {
  width: 95%;
  height: 80%;
  display: flex;
  align-items: center;
  text-align: center;
  border: 1px solid #efefef;
  position: relative;
}

.video-img:hover .videoHover {
  display: flex;
}

.videoArea-content .video-brid .video-img img {
  width: 95%;
  height: 95%;
  margin: auto auto;
}
.video {
  width: 500px;
  height: 500px;
  margin: 20px auto;
}
</style>
