<template>
  <!-- 首页 -->
  <div class="videoHover">
    <Icon class="icon" type="logo-youtube" color="rgba(255, 255, 255, 0.4)" size="50" />
  </div>
</template>

<script>
export default {
  name: 'videoHover',
  data () {
    return {
    }
  },
  methods: {
    go () {
      this.$router.push('/HelloWorld')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.videoHover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* display: flex; */
  display: none;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: 0.5s;
}

.icon {
  margin: 0 auto;
}
</style>
