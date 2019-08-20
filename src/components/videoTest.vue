<template>
  <!-- 首页 -->
  <div class="videoPage">
    <Navbar></Navbar>
    <!-- video element -->
    <div class="content">
      <div class="videoArea">
        <div class="video-head">
          <div class="head-left">
            <div class="videoTitle">狂三威风堂堂</div>
            <div class="videoType">视频 >> 分类 >> AMV</div>
          </div>
          <div class="author">
            <div class="author-img"><img src="../assets/bobo.jpg" /></div>
            <div class="author-name">海盗波波</div>
          </div>
        </div>
        <div class="video-content">
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
        </div>

        <div class="video-bullet">
          <Input search enter-button placeholder="请输入弹幕..." v-model="msg" @on-search="addToList" />
        </div>
        <!-- <div class="box">
          <div class="barrage-container-wrap clearfix" ref="barrageContainerWrap">
            <div class="barrage-container" ref="barrageContainer">
            </div>
          </div>
          <div class="send-wrap">
            <input type="text" class="input" placeholder="弹幕发送">
            <span class="send-btn">发送</span>
          </div>
        </div> -->
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
      <div class="comment-content">
        <div class="author">
          <div class="author-img"><img src="../assets/bobo.jpg" /></div>
        </div>
        <div class="comment">
          <div class="comment-info">
            <div class="author-name">海盗波波</div>
            <div class="comment-text">
              <p>社会主义核心价值观是社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征，反映社会主义核心价值体系的丰富内涵和实践要求，是社会主义核心价值体系的高度凝练和集中表达。
                党的十八大以来，中央高度重视培育和践行社会主义核心价值观。习近平总书记多次作出重要论述、提出明确要求。中央政治局围绕培育和弘扬社会主义核心价值观、弘扬中华传统美德进行集体学习。中办下发《关于培育和践行社会主义核心价值观的意见》。党中央的高度重视和有力部署，为加强社会主义核心价值观教育实践指明了努力方向，提供了重要遵循。</p>
            </div>
            <span class="time">2019年8月19日09:27:57</span>
            <Icon type="ios-thumbs-up-outline" style="margin-left:10px;" />
            <Icon type="ios-thumbs-down-outline" style="margin-left:10px;" />
          </div>
        </div>
      </div>
      <div class="comment-content">
        <div class="author">
          <div class="author-img"><img src="../assets/bobo.jpg" /></div>
        </div>
        <div class="comment">
          <div class="comment-info">
            <div class="author-name">海盗波波</div>
            <div class="comment-text">
              <p>社会主义核心价值观是社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征，反映社会主义核心价值体系的丰富内涵和实践要求，是社会主义核心价值体系的高度凝练和集中表达。
                党的十八大以来，中央高度重视培育和践行社会主义核心价值观。习近平总书记多次作出重要论述、提出明确要求。中央政治局围绕培育和弘扬社会主义核心价值观、弘扬中华传统美德进行集体学习。中办下发《关于培育和践行社会主义核心价值观的意见》。党中央的高度重视和有力部署，为加强社会主义核心价值观教育实践指明了努力方向，提供了重要遵循。</p>
            </div>
            <span class="time">2019年8月19日09:27:57</span>
            <Icon type="ios-thumbs-up-outline" style="margin-left:10px;" />
            <Icon type="ios-thumbs-down-outline" style="margin-left:10px;" />
          </div>
        </div>
      </div>
      <div class="comment-content">
        <div class="author">
          <div class="author-img"><img src="../assets/bobo.jpg" /></div>
        </div>
        <div class="comment">
          <div class="comment-info">
            <div class="author-name">海盗波波</div>
            <div class="comment-text">
              <p>社会主义核心价值观是社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征，反映社会主义核心价值体系的丰富内涵和实践要求，是社会主义核心价值体系的高度凝练和集中表达。
                党的十八大以来，中央高度重视培育和践行社会主义核心价值观。习近平总书记多次作出重要论述、提出明确要求。中央政治局围绕培育和弘扬社会主义核心价值观、弘扬中华传统美德进行集体学习。中办下发《关于培育和践行社会主义核心价值观的意见》。党中央的高度重视和有力部署，为加强社会主义核心价值观教育实践指明了努力方向，提供了重要遵循。</p>
            </div>
            <span class="time">2019年8月19日09:27:57</span>
            <Icon type="ios-thumbs-up-outline" style="margin-left:10px;" />
            <Icon type="ios-thumbs-down-outline" style="margin-left:10px;" />
          </div>
        </div>
      </div>
      <div class="comment-content">
        <div class="author">
          <div class="author-img"><img src="../assets/bobo.jpg" /></div>
        </div>
        <div class="comment">
          <div class="comment-info">
            <div class="author-name">海盗波波</div>
            <div class="comment-text">
              <p>社会主义核心价值观是社会主义核心价值体系的内核，体现社会主义核心价值体系的根本性质和基本特征，反映社会主义核心价值体系的丰富内涵和实践要求，是社会主义核心价值体系的高度凝练和集中表达。
                党的十八大以来，中央高度重视培育和践行社会主义核心价值观。习近平总书记多次作出重要论述、提出明确要求。中央政治局围绕培育和弘扬社会主义核心价值观、弘扬中华传统美德进行集体学习。中办下发《关于培育和践行社会主义核心价值观的意见》。党中央的高度重视和有力部署，为加强社会主义核心价值观教育实践指明了努力方向，提供了重要遵循。</p>
            </div>
            <span class="time">2019年8月19日09:27:57</span>
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
export default {
  name: 'homePage',
  created () {

  },
  data () {
    return {
      msg: 'Hello vue-baberrage',
      barrageIsShow: true,
      currentId: 0,
      barrageLoop: true,
      barrageList: [
        {
          avatar: 'http://119.23.46.237:8080/videoWebSite/image/homePage/bobo.jpg',
          msg: '狂三我老婆',
          time: 7,
          type: MESSAGE_TYPE.NORMAL
        },
        {
          avatar: 'http://119.23.46.237:8080/videoWebSite/image/homePage/bobo.jpg',
          msg: '狂三我老婆',
          time: 7,
          type: MESSAGE_TYPE.NORMAL
        },
        {
          avatar: 'http://119.23.46.237:8080/videoWebSite/image/homePage/bobo.jpg',
          msg: '狂三我老婆',
          time: 7,
          type: MESSAGE_TYPE.NORMAL
        },
        {
          avatar: 'http://119.23.46.237:8080/videoWebSite/image/homePage/bobo.jpg',
          msg: '狂三我老婆',
          time: 7,
          type: MESSAGE_TYPE.NORMAL
        }
      ]
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
        avatar: 'http://119.23.46.237:8080/videoWebSite/image/homePage/bobo.jpg',
        msg: this.msg,
        time: 7,
        type: MESSAGE_TYPE.NORMAL
      })
      console.log('click')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.baberrage {
  top: 0;
  left: 0;
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
  width: 770px;
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
  width: 300px;
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
  padding-top: 10px;
}
</style>
