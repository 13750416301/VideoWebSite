<template>
  <!-- 首页 -->
  <div class="videoList">
    <Navbar></Navbar>
    <div class="videoArea">
      <div class="area-title">
        <Icon type="logo-youtube" color="#1AAFFF" size="25" style="margin-right:5px" />动漫专区
        <span>更多 >>></span>
      </div>
      <div class="videoArea-content">
        <div class="video-brid" v-for="item in animeData" :key="item">
          <a class="video-img">
            <img :src="item.img" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">折纸大师</div>
        </div>
      </div>
    </div>
    <div class="videoArea">
      <div class="area-title">
        <Icon type="ios-game-controller-b-outline" color="#1AAFFF" size="25" style="margin-right:5px" />游戏专区
        <span>更多 >>></span>
      </div>
      <div class="videoArea-content">
        <div class="video-brid" v-for="item in gameData" :key="item">
          <a class="video-img">
            <img :src="item.img" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">折纸大师</div>
        </div>
      </div>
    </div>
    <div class="videoArea">
      <div class="area-title">
        <Icon type="md-videocam" color="#1AAFFF" size="25" style="margin-right:5px" />生活专区
        <span>更多 >>></span>
      </div>
      <div class="videoArea-content">
        <div class="video-brid" v-for="item in lifeData" :key="item">
          <a class="video-img">
            <img :src="item.img" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">折纸大师</div>
        </div>
      </div>
    </div>
    <ReturnTop></ReturnTop>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import VideoHover from '@/components/videoHover'
import ReturnTop from '@/components/returnTop'
import axios from 'axios'
export default {
  created () {
    this.loadData()
  },
  data () {
    return {
      animeData: [],
      gameData: [],
      lifeData: [],
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/',
    }
  },
  components: {
    Navbar,
    VideoHover,
    ReturnTop
  },
  methods: {
    loadData () {
      return axios.get('http://119.23.46.237:3000/getVideoList').then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.animeData = res.data.data.anime
          this.gameData = res.data.data.game
          this.lifeData = res.data.data.life
          this.animeData.forEach(item => {
            item.img = this.imgUrl + item.img
          })
          this.gameData.forEach(item => {
            item.img = this.imgUrl + item.img
          })
          this.lifeData.forEach(item => {
            item.img = this.imgUrl + item.img
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videoList {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  background-color: #efefef;
}

.videoArea {
  margin: 10px auto;
  width: 1080px;
  height: 500px;
  background-color: #fff;
  padding: 20px 20px;
  font-size: 15px;
}

.area-title {
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

.videoArea-content .video-brid .v-title {
  color: #000;
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
</style>
