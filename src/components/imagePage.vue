<template>
  <!-- 首页 -->
  <div class="imagePage">
    <Navbar></Navbar>
    <div class="imageArea">
      <div class="author">
        <div class="author-name">海盗波波</div>
        <div class="author-img"><img src="../assets/bobo.jpg" /></div>
      </div>
      <div class="image-right">
        <div class="img-title">折纸大师</div>
        <div class="img-text">
          <p>四月十日，春假在昨天结束，今天早上就是所谓的返校日。被可爱的妹妹吵醒后，五河士道原本以为今天也会如同往常般度过平凡的一天。然而伴随着一阵突如其来的冲击波，街道就这样消失得无影无踪。在宛如陨石撞击而变成环形山的街道一隅，一名身穿盔甲手持大剑的神秘少女正站在坑洞的正中央。
            “你也是来杀我的吧？”</p>
        </div>
        <div class="image-img">
          <img src="../assets/image/homePage/鸢一折纸.png" />
        </div>
        <div class="image-img">
          <img src="../assets/image/homePage/鸢一折纸.png" />
        </div>
        <div class="image-img">
          <img src="../assets/image/homePage/鸢一折纸.png" />
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
    // this.loadData()
  },
  data () {
    return {
      pageData: [],
      url: 'http://119.23.46.237:8080/imageWebSite/image/homePage/'
    }
  },
  components: {
    Navbar,
    ReturnTop
  },
  methods: {
    loadData () {
      axios.get('http://119.23.46.237:8080/mServer/GetHomePage').then(res => {
        if (res.data.code === 'ok') {
          this.pageData = res.data.items
          // this.pageData.name = this.url + this.pageData.name
          this.pageData.forEach(item => {
            item.name = this.url + item.name
          })
          console.log(this.pageData)
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
  height: 1200px;
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
  font-size: 12px;
  text-indent: 2em;
  line-height: 24px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
</style>
