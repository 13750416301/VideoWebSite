<template>
  <!-- 首页 -->
  <div class="imageList">
    <Navbar></Navbar>
    <div class="imageArea">
      <div class="area-title">
        <Icon type="ios-images" color="#1AAFFF" size="25" style="margin-right:5px" />动漫专区
        <span @click="goImageListByArea('动漫')">更多 >>></span>
      </div>
      <div class="imageArea-content">
        <div class="image-brid" v-for="item in animeData" :key="item">
          <div class="author">
            <div class="author-name">{{item.authorName}}</div>
            <div class="author-img"><img :src="item.authorImg" /></div>
          </div>
          <a class="image-right" @click="goImagePage(item.id)">
            <div class="img-title">{{item.title}}</div>
            <div class="img-text">
              <p>{{item.text}}</p>
            </div>
            <a v-if="item.src1 != imgUrl" class="image-img">
              <img :src="item.src1" />
            </a>
            <a v-if="item.src2 != imgUrl" class="image-img">
              <img :src="item.src2" />
            </a>
            <a v-if="item.src3 != imgUrl" class="image-img">
              <img :src="item.src3" />
            </a>
            <a v-if="item.src4 != imgUrl" class="image-img">
              <img :src="item.src4" />
            </a>
            <a v-if="item.src5 != imgUrl" class="image-img">
              <img :src="item.src5" />
            </a>
            <a v-if="item.src6 != imgUrl" class="image-img">
              <img :src="item.src6" />
            </a>
          </a>
        </div>
      </div>
    </div>
    <div class="imageArea">
      <div class="area-title">
        <Icon type="ios-images" color="#1AAFFF" size="25" style="margin-right:5px" />游戏专区
        <span @click="goImageListByArea('游戏')">更多 >>></span>
      </div>
      <div class="imageArea-content">
        <div class="image-brid" v-for="item in gameData" :key="item">
          <div class="author">
            <div class="author-name">{{item.authorName}}</div>
            <div class="author-img"><img :src="item.authorImg" /></div>
          </div>
          <a class="image-right" @click="goImagePage(item.id)">
            <div class="img-title">{{item.title}}</div>
            <div class="img-text">
              <p>{{item.text}}</p>
            </div>
            <a v-if="item.src1 != imgUrl" class="image-img">
              <img :src="item.src1" />
            </a>
            <a v-if="item.src2 != imgUrl" class="image-img">
              <img :src="item.src2" />
            </a>
            <a v-if="item.src3 != imgUrl" class="image-img">
              <img :src="item.src3" />
            </a>
            <a v-if="item.src4 != imgUrl" class="image-img">
              <img :src="item.src4" />
            </a>
            <a v-if="item.src5 != imgUrl" class="image-img">
              <img :src="item.src5" />
            </a>
            <a v-if="item.src6 != imgUrl" class="image-img">
              <img :src="item.src6" />
            </a>
          </a>
        </div>
      </div>
    </div>
    <div class="imageArea">
      <div class="area-title">
        <Icon type="ios-images" color="#1AAFFF" size="25" style="margin-right:5px" />生活专区
        <span @click="goImageListByArea('生活')">更多 >>></span>
      </div>
      <div class="imageArea-content">
        <div class="image-brid" v-for="item in lifeData" :key="item">
          <div class="author">
            <div class="author-name">{{item.authorName}}</div>
            <div class="author-img"><img :src="item.authorImg" /></div>
          </div>
          <a class="image-right" @click="goImagePage(item.id)">
            <div class="img-title">{{item.title}}</div>
            <div class="img-text">
              <p>{{item.text}}</p>
            </div>
            <a v-if="item.src1 != imgUrl" class="image-img">
              <img :src="item.src1" />
            </a>
            <a v-if="item.src2 != imgUrl" class="image-img">
              <img :src="item.src2" />
            </a>
            <a v-if="item.src3 != imgUrl" class="image-img">
              <img :src="item.src3" />
            </a>
            <a v-if="item.src4 != imgUrl" class="image-img">
              <img :src="item.src4" />
            </a>
            <a v-if="item.src5 != imgUrl" class="image-img">
              <img :src="item.src5" />
            </a>
            <a v-if="item.src6 != imgUrl" class="image-img">
              <img :src="item.src6" />
            </a>
          </a>
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
  name: 'imageList',
  created () {
    this.loadData()
  },
  data () {
    return {
      animeData: [],
      gameData: [],
      lifeData: [],
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/'
    }
  },
  components: {
    Navbar,
    ReturnTop
  },
  methods: {
    goImagePage (id) {
      this.$router.push({path: '/ImagePage', query: {id: id}})
    },
    goImageListByArea (area) {
      this.$router.push({path: '/ImageListByArea', query: {area: area}})
    },
    loadData () {
      axios.get('http://119.23.46.237:3000/getImageList').then(res => {
        if (res.data.code === 0) {
          this.animeData = res.data.data.anime
          this.gameData = res.data.data.game
          this.lifeData = res.data.data.life
          this.animeData.forEach(item => {
            item.src1 = this.imgUrl + item.src1
            item.src2 = this.imgUrl + item.src2
            item.src3 = this.imgUrl + item.src3
            item.src4 = this.imgUrl + item.src4
            item.src5 = this.imgUrl + item.src5
            item.src6 = this.imgUrl + item.src6
            item.authorImg = this.imgUrl + item.authorImg
          })
          this.gameData.forEach(item => {
            item.src1 = this.imgUrl + item.src1
            item.src2 = this.imgUrl + item.src2
            item.src3 = this.imgUrl + item.src3
            item.src4 = this.imgUrl + item.src4
            item.src5 = this.imgUrl + item.src5
            item.src6 = this.imgUrl + item.src6
            item.authorImg = this.imgUrl + item.authorImg
          })
          this.lifeData.forEach(item => {
            item.src1 = this.imgUrl + item.src1
            item.src2 = this.imgUrl + item.src2
            item.src3 = this.imgUrl + item.src3
            item.src4 = this.imgUrl + item.src4
            item.src5 = this.imgUrl + item.src5
            item.src6 = this.imgUrl + item.src6
            item.authorImg = this.imgUrl + item.authorImg
          })
          console.log(this.animeData)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imageList {
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
  /* height: 500px; */
  background-color: #fff;
  padding: 20px 20px;
  /* font-size: 15px; */
  /* color: #1aafff; */
}

.area-title {
  color: #1aafff;
  font-size: 15px;
}

.imageArea span {
  display: block;
  float: right;
  cursor: pointer;
}

.imageArea-content {
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #efefef;
  /* text-align: center; */
}

.imageArea-content .image-brid {
  /* width: 320px; */
  width: 100%;
  /* height: 200px; */
  /* text-align: center; */
  /* background-color: #1aafff; */
  display: flex;
  padding: 20px 30px 20px 0;
  border-bottom: 1px solid #efefef;
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
}

.v-title {
  color: #000;
}

.image-img {
  /* width: 95%; */
  width: 250px;
  /* height: 80%; */
  display: flex;
  float: left;
  align-items: center;
  text-align: center;
  border: 1px solid #efefef;
  position: relative;
  margin-right: 20px;
  margin-top: 10px;
}
.imageArea-content .image-brid .image-img img {
  width: 95%;
  height: 95%;
  margin: auto auto;
}

.img-title {
  font-size: 15px;
  font-weight: bold;
}

.img-text p {
  font-size: 12px;
  text-indent: 2em;
  line-height: 20px;
}
</style>
