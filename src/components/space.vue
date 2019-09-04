<template>
  <!-- 首页 -->
  <div class="homePage">
    <Navbar></Navbar>
    <div class="content">
      <div class="title">
        <div class="title-text">
          <Icon type="ios-contact" size="40" style="margin-right:5px" />个人空间</div>
        <div class="author">
          <div class="author-img">
            <img :src="userData.authorImg" />
          </div>
          <div class="author-name">{{userData.authorName}}</div>
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
                  <a class="video-img" @click="goVideoPage(item.id)">
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
              </div>
              <div class="videoArea-content">
                <div class="video-brid" v-for="item in imageData" :key="item">
                  <a class="video-img" @click="goImagePage(item.id)">
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
    <Modal @on-ok="submitVideo" title="上传视频" v-model="videoDialog" width="600">
      <Form :label-width="80">
        <Row>
          <i-col span="12">
            <FormItem label="视频标题：">
              <Input placeholder="请输入标题" v-model="upVideoData.title" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="视频分类：">
              <Select style="width:120px;" v-model="upVideoData.area">
                <Option value="动漫">动漫</Option>
                <Option value="游戏">游戏</Option>
                <Option value="生活">生活</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <Form class="upload-video" action="http://119.23.46.237:3000/uploadMp4" method="post" enctype="multipart/form-data" target="iframeDisplay2">
            <input class="inputForm" type="file" name="image" multiple />
            <input class="inputForm" type="submit" style="width:50px;" value="上传" />
          </Form>
          <iframe id="iframeDisplay2" name="iframeDisplay2" style="display: none;"></iframe>
        </Row>
      </Form>
    </Modal>
    <Modal @on-ok="submitImg" title="上传图片" v-model="imageDialog" width="600">
      <Form :label-width="80" action="http://119.23.46.237:3000/upload" method="post" enctype="multipart/form-data">
        <Row>
          <i-col span="12">
            <FormItem label="图片标题：">
              <Input placeholder="请输入标题" v-model="upImageData.title" />
            </FormItem>
          </i-col>
          <i-col span="12">
            <FormItem label="图片分类：">
              <Select style="width:120px;" v-model="upImageData.area">
                <Option value="动漫">动漫</Option>
                <Option value="游戏">游戏</Option>
                <Option value="生活">生活</Option>
              </Select>
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <FormItem label="图片描述：">
            <Input type="textarea" :rows="3" v-model="upImageData.text" />
          </FormItem>
        </Row>
        <Row>
          <!-- <input type="file" name="image" multiple /> -->
          <Form class="upload-video" action="http://119.23.46.237:3000/upload" method="post" enctype="multipart/form-data" target="iframeDisplay">
            <input class="inputForm" type="file" name="image" multiple />
            <input class="inputForm" type="submit" style="width:50px;" value="上传" />
          </Form>
          <iframe id="iframeDisplay" name="iframeDisplay" style="display: none;"></iframe>
        </Row>
      </Form>
    </Modal>
    <Modal @on-ok="submitArticle" title="上传文章" v-model="articleDialog" width="600">
      <Form :label-width="80">
        <Row>
          <i-col span="12">
            <FormItem label="文章标题：">
              <Input placeholder="请输入标题" v-model="upArticleData.title" />
            </FormItem>
          </i-col>
        </Row>
        <Row>
          <FormItem label="文章内容：">
            <Input type="textarea" :rows="10" v-model="upArticleData.content" />
          </FormItem>
        </Row>
        <Row>
          <Form class="upload-video" action="http://119.23.46.237:3000/upload" method="post" enctype="multipart/form-data" target="iframeDisplay3">
            <input class="inputForm" type="file" name="image" multiple />
            <input class="inputForm" type="submit" style="width:50px;" value="上传" />
          </Form>
          <iframe id="iframeDisplay3" name="iframeDisplay3" style="display: none;"></iframe>
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
    this.getUser()
    // this.loadData()
  },
  data () {
    return {
      videoDialog: false,
      imageDialog: false,
      articleDialog: false,
      videoData: [],
      imageData: [],
      articleData: [],
      imgUrl: 'http://119.23.46.237:8080/videoWebSite/image/',
      videoUrl: 'http://119.23.46.237:8080/videoWebSite/video/',
      isLogin: false,
      userData: null,
      upImageData: {
        title: null,
        text: null,
        area: null,
        src1: null,
        src2: null,
        src3: null,
        src4: null,
        src5: null,
        src6: null
      },
      upVideoData: {
        title: null,
        text: null,
        area: null,
        src: null
      },
      upArticleData: {
        title: null,
        content: null,
        img: null
      }
    }
  },
  components: {
    Navbar,
    VideoHover,
    ReturnTop
  },
  methods: {
    loadData () {
      // this.getUser()
      axios.get('http://119.23.46.237:3000/getVideoListByName?name=' + this.userData.authorName).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.videoData = res.data.data
          // this.imageData = res.data.data.images
          // this.articleData = res.data.data.article
          this.videoData.forEach(item => {
            item.img = this.videoUrl + item.img
            item.authorImg = this.imgUrl + item.authorImg
          })
        }
      })
      axios.get('http://119.23.46.237:3000/getImageListByName?name=' + this.userData.authorName).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.imageData = res.data.data
          this.imageData.forEach(item => {
            item.src1 = this.imgUrl + item.src1
            item.authorImg = this.imgUrl + item.authorImg
          })
        }
      })
      axios.get('http://119.23.46.237:3000/getArticleListByName?name=' + this.userData.authorName).then(res => {
        if (res.data.code === 0) {
          console.log(res.data.data)
          this.articleData = res.data.data
          this.articleData.forEach(item => {
            item.img = this.imgUrl + item.img
            item.authorImg = this.imgUrl + item.authorImg
          })
        }
      })
    },
    getUser () {
      axios.get('http://119.23.46.237:3000/getUser').then(res => {
        if (res.data.code === 0 && res.data.data) {
          for (let i in res.data.data) {
            this.isLogin = true
          }
          // this.isLogin = true
          this.userData = res.data.data
          this.userData.authorImg = this.imgUrl + this.userData.authorImg
          console.log(this.userData)
          this.loadData()
        }
      })
    },
    submitImg () {
      console.log('haha')
      axios.get('http://119.23.46.237:3000/upload').then(res => {
        this.upImageData.src1 = res.data.filename
        console.log(this.upImageData.src1)
        axios.post('http://119.23.46.237:3000/uploadImage', {
          title: this.upImageData.title,
          text: this.upImageData.text,
          area: this.upImageData.area,
          src1: this.upImageData.src1,
          src2: '',
          src3: '',
          src4: '',
          src5: '',
          src6: '',
          authorId: this.userData.authorId,
          authorName: this.userData.authorName,
          authorImg: this.userData.authorImg.replace(this.imgUrl, '')
        }).then(res => {
          if (res.data.code === 0) {
            this.$Message.success('上传成功！')
          }
        })
      })
    },
    submitVideo () {
      axios.get('http://119.23.46.237:3000/uploadMp4').then(res => {
        this.upVideoData.src = res.data.filename
        console.log(this.upVideoData.src)
        axios.post('http://119.23.46.237:3000/uploadVideo', {
          title: this.upVideoData.title,
          area: this.upVideoData.area,
          src: this.upVideoData.src,
          authorId: this.userData.authorId,
          authorName: this.userData.authorName,
          authorImg: this.userData.authorImg.replace(this.imgUrl, '')
        }).then(res => {
          if (res.data.code === 0) {
            this.$Message.success('上传成功！')
          }
        })
      })
    },
    submitArticle () {
      axios.get('http://119.23.46.237:3000/upload').then(res => {
        this.upArticleData.img = res.data.filename
        axios.post('http://119.23.46.237:3000/', {
          title: this.upArticleData.title,
          content: this.upArticleData.content,
          img: this.upArticleData.img,
          authorId: this.userData.authorId,
          authorName: this.userData.authorName,
          authorImg: this.userData.authorImg.replace(this.imgUrl, '')
        }).then(res => {
          if (res.data.code === 0) {
            this.$Message.success('上传成功！')
          }
        })
      })
      console.log(this.upArticleData)
    },
    goVideoPage (id) {
      this.$router.push({path: '/VideoPage', query: {id: id}})
    },
    goImagePage (id) {
      this.$router.push({path: '/ImagePage', query: {id: id}})
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
  max-height: 600px;
  overflow: auto;
  /* height: auto; */
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
  width: 100%;
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
  width: 100%;
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

.upload-video {
  width: 100%;
  padding: 10px 10px;
}

.inputForm {
  outline-style: none;
  /* border: 1px solid #ccc; */
  /* border-radius: 2px; */
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
