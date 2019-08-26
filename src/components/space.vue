<template>
  <!-- 首页 -->
  <div class="homePage">
    <Navbar></Navbar>
    <div class="content">
      <div class="title">
        <div class="title-text"><Icon type="ios-contact" size="40" style="margin-right:5px" />个人空间</div>
        <div class="author">
          <div class="author-img">
            <img src="../assets/bobo.jpg" />
          </div>
          <div class="author-name">海盗波波</div>
        </div>
      </div>
      <Tabs class="tab" type="card">
        <TabPane label="我的视频">
          <div class="tab-content">
              <div class="videoArea">
                <div class="area-title">
                  <Icon type="logo-youtube" color="#1AAFFF" size="25" style="margin-right:5px" />个人视频
                </div>
              <div class="videoArea-content">
                <div class="video-brid" v-for="item in videoData" :key="item">
                  <a class="video-img" @click="goVideoPage">
                    <img :src="item.img" />
                    <VideoHover></VideoHover>
                  </a>
                  <div class="v-title">{{ item.name }}</div>
                </div>
              </div>
            </div>
            <div class="upload-video">
              <div class="upload-title">
                <Icon type="ios-cloud-upload-outline" />上传视频
              </div>
              <div class="upload-button" @click="videoDialog = true">
                  <Icon type="md-add" size="80" color="rgba(0, 0, 0, 0.5)" />
              </div>
            </div>
          </div>
        </TabPane>
        <TabPane label="我的图片">
          <div class="tab-content">
            <div class="videoArea">
              <div class="area-title">
                <Icon type="ios-images" color="#1AAFFF" size="25" style="margin-right:5px" />个人图片
                <span>更多</span>
              </div>
              <div class="videoArea-content">
                <div class="video-brid" v-for="item in imageData" :key="item">
                  <a class="video-img">
                    <img :src="item.src1" />
                  </a>
                  <div class="img-title">{{ item.title }}</div>
                </div>
              </div>
            </div>
            <div class="upload-video">
              <div class="upload-title">
                <Icon type="ios-cloud-upload-outline" />上传图片
              </div>
              <div class="upload-button" @click="imageDialog = true">
                  <Icon type="md-add" size="80" color="rgba(0, 0, 0, 0.5)" />
              </div>
            </div>
          </div>
          
        </TabPane>
        <TabPane label="我的文章">
          <div class="tab-content">
            <div class="articleArea">
              <div class="area-title" style="color:#1aafff; font-size:15px;">
                <Icon type="ios-book-outline" color="#1AAFFF" size="25" style="margin-right:5px;" />个人文章
              </div>
              <div class="articleArea-content">
                <div class="articleArea-brid" v-for="item in articleData" :key="item">
                  <div class="author-img">
                    <img :src="item.authorImg" />
                  </div>
                  <div class="content1">
                    <div class="author-name"><span>{{item.authorName}}</span>的文章</div>
                    <div class="article">
                      <div class="article-title">{{item.title}}</div>
                      <div class="article-content">
                        <p>{{item.content}}</p>
                        <img :src="item.img">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="upload-video">
              <div class="upload-title">
                <Icon type="ios-cloud-upload-outline" />上传文章
              </div>
              <div class="upload-button" @click="articleDialog = true">
                  <Icon type="md-add" size="80" color="rgba(0, 0, 0, 0.5)" />
              </div>
            </div>
          </div>
          
        </TabPane>
      </Tabs>
    </div>
    <Modal title="上传视频" v-model="videoDialog" width="600">
      <Form :label-width="80">
        <Row>
          <i-col span="12">
            <FormItem label="视频标题：">
              <Input placeholder="请输入标题" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="视频分类：">
              <Select style="width:120px;">
                <Option value="动漫">动漫</Option>
                <Option value="游戏">游戏</Option>
                <Option value="生活">生活</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <upload class="upload-video" action="fjdsfjls">
            <div class="upload-title" style="font-size:12px;">
              <Icon type="ios-cloud-upload-outline" />上传视频
            </div>
            <div class="upload-button">
                <Icon type="md-add" size="80" color="rgba(0, 0, 0, 0.5)" />
            </div>
          </upload>
        </Row>
      </Form>
    </Modal>
    <Modal title="上传图片" v-model="imageDialog" width="600">
      <Form :label-width="80">
        <Row>
          <i-col span="12">
            <FormItem label="图片标题：">
              <Input placeholder="请输入标题" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="图片分类：">
              <Select style="width:120px;">
                <Option value="动漫">动漫</Option>
                <Option value="游戏">游戏</Option>
                <Option value="生活">生活</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <FormItem label="图片描述：">
            <Input type="textarea" :rows="3" />
          </FormItem>
        </Row>
        <Row>
          <upload class="upload-video" action="fjdsfjls">
            <div class="upload-title" style="font-size:12px;">
              <Icon type="ios-cloud-upload-outline" />上传图片
            </div>
            <div class="upload-button">
                <Icon type="md-add" size="80" color="rgba(0, 0, 0, 0.5)" />
            </div>
          </upload>
        </Row>
      </Form>
    </Modal>
    <Modal title="上传文章" v-model="articleDialog" width="600">
      <Form :label-width="80">
        <Row>
          <i-col span="12">
            <FormItem label="文章标题：">
              <Input placeholder="请输入标题" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <FormItem label="文章内容：">
            <Input type="textarea" :rows="10" />
          </FormItem>
        </Row>
        <Row>
          <upload class="upload-video" action="fjdsfjls">
            <div class="upload-title" style="font-size:12px;">
              <Icon type="ios-cloud-upload-outline" />上传文章图片
            </div>
            <div class="upload-button">
                <Icon type="md-add" size="80" color="rgba(0, 0, 0, 0.5)" />
            </div>
          </upload>
        </Row>
      </Form>
    </Modal>
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
      videoDialog: false,
      imageDialog: false,
      articleDialog: false,
      videoData: [],
      imageData: [],
      articleData: [],
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
      axios.get('http://119.23.46.237:3000/getHomePage').then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.videoData = res.data.data.video
          this.imageData = res.data.data.images
          this.articleData = res.data.data.article
          this.videoData.forEach(item => {
            item.img = this.imgUrl + item.img
            item.authorImg = this.imgUrl + item.authorImg
          })
          this.imageData.forEach(item => {
            item.src1 = this.imgUrl + item.src1
            item.authorImg = this.imgUrl + item.authorImg
          })
          this.articleData.forEach(item => {
            item.img = this.imgUrl + item.img
            item.authorImg = this.imgUrl + item.authorImg
          })
        }
      })
    },
    goVideoPage () {
      this.$router.push('/VideoPage')
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


.content {
  margin: 10px auto;
  width: 1080px;
  /* height: 500px; */
  background-color: #fff;
  padding: 20px 20px;
}
.title {
  display: flex;
}
.title-text {
  width: 70%;
  color: #1aafff;
  font-weight: bold;
  font-size: 20px;
  height: 50%;
  display: flex;
  align-items: center;
}
.author {
  width: 30%;
  display: flex;
  align-items: center;
  text-align: right;
}
.author-img {
  width: 120px;
  margin-right: 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
}

.author-img img {
  width: 100%;
}

.author-name {
  font-size: 15px;
  font-weight: bold;
}

.author-name span {
  font-weight: bold;
  margin-right: 5px;
}

.tab {
  margin-top: 15px;
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

.videoArea {
  width: 100%;
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
  width: 100%;
  background-color: #fff;
  padding: 20px 20px;
}

.articleArea-content {
  width: 100%;
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid #efefef;
  /* display: flex; */
}

.articleArea-brid {
  width: 100%;
  display: flex;
  margin-top: 40px;
  padding-right: 50px;
}

.articleArea-brid .content1 {
  margin-left: 0;
}

.articleArea-brid .author-img {
  width: 120px;
  /* height: 120px; */
  margin-right: 20px;
  border: none;
  cursor: pointer;
}

.articleArea-brid .author-img img {
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

.upload-video {
  width: 100%;
  padding: 10px 10px;
}

.upload-title {
  font-size: 15px;
  color: #000;
  margin-bottom: 10px;
}

.upload-button {
  cursor: pointer;
  width: 84px;
  height: 84px;
  text-align: center;
  display: flex;
  align-items: center;
  border: 2px solid rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

</style>
