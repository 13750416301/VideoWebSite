<template>
  <div class="hello">
    <!-- video element -->
    <vue-plyr class="video">
      <video poster="poster.png" src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4">
        <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="720">
        <source src="http://119.23.46.237:8080/web/%E5%A8%81%E9%A3%8E%E5%A0%82%E5%A0%82.mp4" type="video/mp4" size="1080">
        <track kind="captions" label="English" srclang="en" src="captions-en.vtt" default>
      </video>
    </vue-plyr>

    <!-- audio element -->
    <!-- <vue-plyr>
      <audio>
        <source src="audio.mp3" type="audio/mp3" />
        <source src="audio.ogg" type="audio/ogg" />
      </audio>
    </vue-plyr> -->

    <!-- youtube iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
    <!-- <vue-plyr>
      <div class="plyr__video-embed">
        <iframe src="https://www.youtube.com/embed/bTqVqk7FSmY?iv_load_policy=3&modestbranding=1&playsinline=1&showinfo=0&rel=0&enablejsapi=1" allowfullscreen allowtransparency allow="autoplay">
        </iframe>
      </div>
    </vue-plyr> -->

    <!-- youtube div element -->
    <!-- <vue-plyr>
      <div data-plyr-provider="youtube" data-plyr-embed-id="bTqVqk7FSmY"></div>
    </vue-plyr> -->

    <!-- vimeo iframe with progressive enhancement (extra queries after the url to optimize the embed) -->
    <!-- <vue-plyr>
      <div class="plyr__video-embed">
        <iframe src="https://player.vimeo.com/video/76979871?loop=false&byline=false&portrait=false&title=false&speed=true&transparent=0&gesture=media" allowfullscreen allowtransparency allow="autoplay">
        </iframe>
      </div>
    </vue-plyr> -->

    <!-- vimeo div element -->
    <!-- <vue-plyr>
      <div data-plyr-provider="vimeo" data-plyr-embed-id="76979871"></div>
    </vue-plyr> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.video {
  width: 500px;
  height: 500px;
  margin: 0 auto;
}
</style>
