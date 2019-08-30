<template>
  <!-- 首页 -->
  <div class="articlePage">
    <Navbar></Navbar>
    <div class="articleArea">
      <div class="author">
        <div class="author-name">{{data.authorName}}</div>
        <div class="author-img"><img :src="data.authorImg" /></div>
      </div>
      <div class="content-right">
        <div class="article-title">{{data.title}}</div>
        <div class="image-img">
          <img :src="data.img" />
        </div>
        <div class="article-content">
          <!-- <p>{{data.content}}</p> -->
          <p v-for="i in section" :key="i">{{i}}</p>
        </div>
      </div>
    </div>
    <ReturnTop></ReturnTop>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'
import ReturnTop from '@/components/returnTop'
import axios from 'axios'
export default {
  name: 'articlePage',
  created () {
    this.id = this.$route.query.id
    this.loadData()
  },
  data () {
    return {
      data: {},
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/',
      section: []
    }
  },
  components: {
    Navbar,
    ReturnTop
  },
  methods: {
    loadData () {
      axios.get('http://119.23.46.237:3000/getArticleById?id=' + this.id).then(res => {
        if (res.data.code === 0) {
          this.data = res.data.data
          this.data.img = this.imgUrl + this.data.img
          this.data.authorImg = this.imgUrl + this.data.authorImg
          this.section = this.data.content.split('<br>')
          console.log(this.data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.articlePage {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  /* height: 100%;
  width: 100%; */
  background-color: #efefef;
}

.articleArea {
  margin: 10px auto;
  width: 1080px;
  min-height: 1080px;
  /* height: 500px; */
  background-color: #fff;
  padding: 20px 20px;
  /* font-size: 15px; */
  /* color: #1aafff; */
  display: flex;
}

.author {
  width: 100px;
  text-align: center;
  margin-right: 20px;
}

.author-img {
  width: 70px;
  cursor: pointer;
}

.author-img img {
  width: 100%;
}

.author-name {
  /* display: flex; */
  line-height: 24px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  width: 70px;
}
.content-right {
  width: 100%;
  padding-right: 100px;
}

.image-img {
  /* width: 95%; */
  width: 700px;
  height: auto;
  /* height: 80%; */
  display: flex;
  /* float: left; */
  align-items: center;
  text-align: center;
  border: 4px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  position: relative;
  /* margin-left: 150px; */
  /* margin-top: 20px; */
  margin: 20px auto;
}
.image-img img {
  width: 100%;
  height: 100%;
  margin: auto auto;
}

.article-title {
  margin-top: 20px;
  font-size: 20px;
  line-height: 60px;
  width: 600px;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
}

.article-content p {
  font-size: 14px;
  text-indent: 2em;
  line-height: 28px;
  padding-top: 10px;
  /* border-top: 1px solid rgba(0, 0, 0, 0.2); */
}
</style>
