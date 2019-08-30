<template>
  <!-- 首页 -->
  <div class="imagePage">
    <Navbar></Navbar>
    <div class="imageArea">
      <div class="author">
        <div class="author-name">{{data.authorName}}</div>
        <div class="author-img"><img :src="data.authorImg" /></div>
      </div>
      <div class="image-right">
        <div class="img-title">{{data.title}}</div>
        <div class="img-text">
          <p>{{data.text}}</p>
        </div>
        <div v-if="data.src1 != imgUrl" class="image-img">
          <img :src="data.src1" />
        </div>
        <div v-if="data.src2 != imgUrl" class="image-img">
          <img :src="data.src2" />
        </div>
        <div v-if="data.src3 != imgUrl" class="image-img">
          <img :src="data.src3" />
        </div>
        <div v-if="data.src4 != imgUrl" class="image-img">
          <img :src="data.src4" />
        </div>
        <div v-if="data.src5 != imgUrl" class="image-img">
          <img :src="data.src5" />
        </div>
        <div v-if="data.src6 != imgUrl" class="image-img">
          <img :src="data.src6" />
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
  name: 'imagePage',
  created () {
    this.id = this.$route.query.id
    this.loadData()
  },
  data () {
    return {
      data: {},
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/'
    }
  },
  components: {
    Navbar,
    ReturnTop
  },
  methods: {
    loadData () {
      axios.get('http://119.23.46.237:3000/getImageById?id=' + this.id).then(res => {
        if (res.data.code === 0) {
          this.data = res.data.data
          this.data.src1 = this.imgUrl + this.data.src1
          this.data.src2 = this.imgUrl + this.data.src2
          this.data.src3 = this.imgUrl + this.data.src3
          this.data.src4 = this.imgUrl + this.data.src4
          this.data.src5 = this.imgUrl + this.data.src5
          this.data.src6 = this.imgUrl + this.data.src6
          this.data.authorImg = this.imgUrl + this.data.authorImg
          console.log(this.data)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagePage {
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  /* height: 100%;
  width: 100%; */
  background-color: #efefef;
}

.imageArea {
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
.image-right {
  width: 100%;
  padding-right: 100px;
}

.image-img {
  /* width: 95%; */
  width: 500px;
  height: auto;
  /* height: 80%; */
  display: flex;
  /* float: left; */
  align-items: center;
  text-align: center;
  border: 4px solid rgba(0, 0, 0, 0.6);
  border-radius: 5px;
  position: relative;
  margin-left: 150px;
  margin-top: 20px;
}
.image-img img {
  width: 100%;
  height: 100%;
  margin: auto auto;
}

.img-title {
  font-size: 15px;
  width: 300px;
  margin: 0 auto;
  font-weight: bold;
  text-align: center;
}

.img-text p {
  font-size: 14px;
  text-indent: 2em;
  line-height: 28px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
