<template>
  <!-- 首页 -->
  <div class="homePage">
    <Navbar></Navbar>
    <div class="articleArea">
      <div class="area-title" style="color:#1aafff; font-size:15px;">
        <Icon type="ios-book-outline" color="#1AAFFF" size="25" style="margin-right:5px;" />文章专区
      </div>
      <div class="articleArea-content">
        <div class="content-left">
          <div class="articleArea-brid" v-for="item in data" :key="item.id">
            <div class="author-img">
              <img :src="item.authorImg" />
            </div>
            <div class="content">
              <div class="author-name"><span>{{item.authorName}}</span>的文章</div>
              <div class="article">
                <div class="article-title" @click="goArticlePage(item.id)">{{item.title}}</div>
                <div class="article-content">
                  <p>{{item.content}}</p>
                  <div class="article-img">
                    <img :src="item.img">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="content-right">
          <h3>今日推荐</h3>
          <ul>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
            <li>
              <a class="introImg">
                <img src="../assets/introduce/1.jpg" />
                报名 | 亚马逊首席科学家李沐亲授「深度学习实训营
              </a>
            </li>
          </ul>
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
  name: 'homePage',
  created () {
    this.loadData()
  },
  data () {
    return {
      data: [],
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/'
    }
  },
  components: {
    Navbar,
    VideoHover,
    ReturnTop
  },
  methods: {
    loadData () {
      axios.get('http://119.23.46.237:3000/getArticleList').then(res => {
        if (res.data.code === 0) {
          this.data = res.data.data.article
          this.data.forEach(item => {
            item.img = this.imgUrl + item.img
            item.authorImg = this.imgUrl + item.authorImg
            item.content = item.content.slice(0, 150) + '...'
            item.content = item.content.split('<br>').join('')
          })
        }
      })
    },
    goArticlePage (id) {
      this.$router.push({path: '/ArticlePage', query: {id: id}})
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

.articleArea {
  margin: 10px auto;
  width: 1080px;
  /* height: 500px; */
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

.articleArea-content .content-left {
  width: 65%;
}

.articleArea-brid {
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding-right: 50px;
}

.articleArea-brid .author-img {
  width: 10%;
  margin-right: 20px;
  cursor: pointer;
}

.articleArea-brid .author-img > img {
  width: 100%;
}

.articleArea-brid .author-name {
  display: flex;
  line-height: 24px;
}

.articleArea-brid .author-name span {
  font-weight: bold;
  margin-right: 5px;
}

.articleArea-brid .content {
  width: 90%;
}

.article {
  background-color: #f9f9f9;
  margin-right: 10px;
  padding: 10px 10px;
}

.article-title {
  font-size: 15px;
  line-height: 30px;
  color: #1aafff;
  cursor: pointer;
}

.article-title:hover {
  text-decoration: underline;
}

.article-content {
  line-height: 24px;
  display: flex;
}

.article-content p {
  width: 80%;
}

.article-content .article-img {
  margin-left: 20px;
  /* width: 100px; */
  width: 20%;
}

.article-content .article-img img {
  width: 100%;
}

.content-right {
  width: 35%;
  padding: 20px 20px;
  border-left: 1px solid #efefef;
}

.content-right h3 {
  border-left: 2px solid #1aafff;
  padding-left: 10px;
}

.content-right ul li {
  margin-top: 20px;
}

.content-right ul li a {
  display: flex;
  align-items: center;
}

.content-right ul li a img {
  width: 85px;
  margin-right: 10px;
}
</style>
