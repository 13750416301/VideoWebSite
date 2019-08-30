<template>
  <!-- 首页 -->
  <div class="videoPage">
    <Navbar></Navbar>
    <!-- video element -->
    <div class="content">
      <div class="videoArea">
        <div class="video-head">
          <div class="head-left">
            <div class="videoTitle">{{data.title}}</div>
            <div class="videoType">分类：{{data.category}}</div>
          </div>
          <div class="author">
            <div class="author-img"><img :src="data.authorImg" /></div>
            <div class="author-name">{{data.authorName}}</div>
          </div>
        </div>
        <!-- <div class="video-content">
          <vue-plyr class="video">
            <video poster="poster.png" src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4">
              <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="480">
              <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="720">
              <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="1080">
              <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
            </video>
            <vue-baberrage class="baberrage" :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
            </vue-baberrage>
          </vue-plyr>
        </div> -->
        <div class="video-content">
          <vue-plyr class="video">
            <video poster="poster.png" :src="data.src1">
              <source :src="data.src3" type="video/mp4" size="480">
              <source :src="data.src2" type="video/mp4" size="720">
              <source :src="data.src1" type="video/mp4" size="1080">
              <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
            </video>
            <vue-baberrage class="baberrage" :isShow="barrageIsShow" :barrageList="barrageList" :loop="barrageLoop">
            </vue-baberrage>
          </vue-plyr>
        </div>

        <div class="video-bullet">
          <Input search enter-button="发送" placeholder="请输入弹幕..." v-model="msg" @on-search="addToList" />
        </div>
      </div>
      <div class="content-right">
        <div class="right-title">猜你喜欢</div>
      </div>
    </div>
    <div class="comment-area">
      <div class="comment-input">
        <Input search enter-button="发表评论" placeholder="请输入评论..." />
      </div>
      <div class="popular-comment">
        <Icon type="ios-flame" size="20" />热门评论</div>
      <div class="comment-content" v-for="item in commentData" :key="item.id">
        <div class="author">
          <div class="author-img"><img :src="item.authorImg" /></div>
        </div>
        <div class="comment">
          <div class="comment-info">
            <div class="author-name">{{item.authorName}}</div>
            <div class="comment-text">
              <p>{{item.msg}}</p>
            </div>
            <span class="time">{{item.time}}</span>
            <Icon type="ios-thumbs-up-outline" style="margin-left:10px;" />
            <Icon type="ios-thumbs-down-outline" style="margin-left:10px;" />
          </div>
        </div>
      </div>
    </div>
    <ReturnTop></ReturnTop>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import ReturnTop from '@/components/returnTop'
import {MESSAGE_TYPE} from 'vue-baberrage'
import axios from 'axios'
export default {
  name: 'videoPage',
  created () {
    this.id = this.$route.query.id
    this.loadData()
    this.loadbarrageData()
    this.loadCommentData()
  },
  data () {
    return {
      msg: '请输入弹幕！',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: true,
      barrageList: [],
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/',
      videoUrl: 'http://119.23.46.237:8080/videoWebSite/video/',
      id: null,
      data: {},
      barrageData: [],
      commentData: []
    }
  },
  components: {
    Navbar,
    ReturnTop
  },
  methods: {
    addToList () {
      this.barrageList.push({
        id: ++this.currentId,
        // avatar: 'http://119.23.46.237:8080/videoWebSite/image/微信图片_20190826172039.jpg',
        avatar: this.data.authorImg,
        msg: this.msg,
        time: 7,
        type: MESSAGE_TYPE.NORMAL
      })
    },
    loadData () {
      axios.get('http://119.23.46.237:3000/getVideoById?id=' + this.id).then(res => {
        if (res.data.code === 0) {
          this.data = res.data.data
          this.data.authorImg = this.imgUrl + this.data.authorImg
          this.data.img = this.imgUrl + this.data.img
          this.data.src1 = this.videoUrl + this.data.src1
          this.data.src2 = this.videoUrl + this.data.src2
          this.data.src3 = this.videoUrl + this.data.src3
        }
      })
    },
    loadbarrageData () {
      axios.get('http://119.23.46.237:3000/getBarrageByVideoId?videoId=' + this.id).then(res => {
        if (res.data.code === 0) {
          this.barrageData = res.data.data
          this.barrageData.forEach(item => {
            this.barrageList.push({
              id: ++this.currentId,
              avatar: this.imgUrl + item.authorImg,
              msg: item.msg,
              time: 7,
              type: MESSAGE_TYPE.NORMAL
            })
          })
        }
      })
    },
    loadCommentData () {
      axios.get('http://119.23.46.237:3000/getCommentByVideoId?videoId=' + this.id).then(res => {
        if (res.data.code === 0) {
          this.commentData = res.data.data
          this.commentData.forEach(item => {
            item.authorImg = this.imgUrl + item.authorImg
          })
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baberrage {
  top: 0;
  left: 0;
  height: 80%;
}
.videoPage {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #efefef;
}
.content {
  width: 1080px;
  height: 600px;
  margin: 10px auto;
  display: flex;
}
.videoArea {
  width: 820px;
  margin-right: 10px;
  background-color: #fff;
}
.video-head {
  padding: 10px 30px;
  /* width: 400px; */
  width: 100%;
  /* margin: 0 auto; */
  display: flex;
  margin-bottom: 20px;
}

.head-left {
  width: 80%;
}

.author {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.author-img {
  width: 50px;
  height: 50px;
  margin-right: 10px;
}

.author-img img {
  width: 100%;
}

.author-name {
  font-weight: bold;
}

.videoTitle {
  font-weight: bold;
  font-size: 20px;
  line-height: 40px;
}

.videoType {
  line-height: 24px;
}

.video-content {
  /* width: 660px; */
  width: 100%;
  padding: 0 30px;
  position: relative;
  /* margin: 0 auto; */
}

.video {
  /* width: 660pxx; */
  width: 100%;
  /* height: 450px; */
  margin: 0 auto;
  position: relative;
}

.right-title {
  border-left: 5px solid #1aafff;
  font-weight: bold;
  font-size: 15px;
  line-height: 30px;
  padding-left: 5px;
}

.video-bullet {
  width: 100%;
  padding: 20px 30px;
}

.content-right {
  background-color: #fff;
  width: 250px;
  /* height: 800px; */
  padding: 20px 10px;
}

.comment-area {
  width: 1080px;
  margin: 10px auto;
  background-color: #fff;
  padding: 15px 80px 10px 30px;
}

.comment-input {
  margin-bottom: 15px;
}

.popular-comment {
  color: #1aafff;
  font-size: 15px;
  margin-bottom: 15px;
}

.comment-content {
  display: flex;
  margin-bottom: 20px;
  padding: 10px 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: flex-start;
}

.comment-content .author {
  padding: 10px 10px;
}

.comment {
  /* padding: 0 10px; */
}

.comment-info {
  padding-top: 10px;
}

.comment-text {
  padding: 10px 0;
}
</style>
