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
    <div class="videoArea">
      <Icon type="logo-youtube" color="#1AAFFF" size="25" style="margin-right:5px" />视频专区
      <span>更多 >>></span>
      <div class="videoArea-content">
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
            <VideoHover></VideoHover>
          </a>
          <div class="v-title">狂三威风堂堂</div>
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
          <div class="img-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          <div class="img-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          <div class="img-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          <div class="img-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          <div class="img-title">狂三威风堂堂</div>
        </div>
        <div class="video-brid">
          <a class="video-img">
            <img src="../assets/cluemi.jpg" />
          </a>
          <div class="img-title">狂三威风堂堂</div>
        </div>
      </div>
    </div>
    <div class="articleArea">
      <Icon type="ios-book-outline" color="#1AAFFF" size="25" style="margin-right:5px" />文章专区
      <span>更多 >>></span>
      <div class="articleArea-content">
        <div class="articleArea-brid">
          <div class="author-img">
            <img src="../assets/bobo.jpg" />
          </div>
          <div class="content">
            <div class="author-name"><span>海盗波波</span>的文章</div>
            <div class="article">
              <div class="article-title">论社会主义核心价值观</div>
              <div class="article-content">
                <p>社会主义核心价值观是社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征，反映社会主义核心价值体系的丰富内涵和实践要求，是社会主义核心价值体系的高度凝练和集中表达...</p>
                <img src="../assets/bobo.jpg">

              </div>
            </div>
          </div>
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
  color: #1aafff;
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

.articleArea {
  margin: 10px auto;
  width: 1080px;
  height: 500px;
  background-color: #fff;
  padding: 20px 20px;
}

.articleArea span {
  display: block;
  float: right;
  cursor: pointer;
}

.articleArea-content {
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #efefef;
  display: flex;
}

.articleArea-brid {
  width: 60%;
  display: flex;
  margin-top: 20px;
  padding-right: 50px;
}

.author-img {
  width: 120px;
  margin-right: 20px;
}

.author-img img {
  width: 100%;
}

.author-name {
  display: flex;
  line-height: 24px;
}

.author-name span {
  font-weight: bold;
  margin-right: 5px;
}

.article {
  /* border: 1px solid #efefef; */
  background-color: #f9f9f9;
  margin-right: 10px;
  padding: 10px 10px;
}

.article-title {
  font-size: 15px;
  line-height: 30px;
  color: #1aafff;
}

.article-content {
  line-height: 24px;
  display: flex;
}

.article-content img {
  margin-left: 20px;
  width: 100px;
}
</style>
