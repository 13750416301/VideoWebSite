<template>
  <!-- 首页 -->
  <div class="returnTop">
    <a href="#" class="return-top" title="回到顶部">
      <Icon type="ios-arrow-up" size="35" style="margin: 0 auto;" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'returnTop',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.return-top {
  position: fixed;
  cursor: pointer;
  border: 1px solid #515a6e;
  border-radius: 3px;
  bottom: 50px;
  right: 80px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
}
.return-top:hover {
  border: 1px solid #1aafff;
}
</style>
