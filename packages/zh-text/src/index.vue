<template>
<div class="zh-text">{{text}}</div>
</template>

<script>
export default {
  name: 'zh-text',
  props: {
    text: {
      type: String,
      default: '测试按需引入Text'
    }
  },
  data () {
    return {
      defaultText: '测试按需引入Text'
    }
  }
}
</script>

<style lang="less">
@import "~styles/var.less";
@import "~styles/mixins.less";
@import "./css/index.less";
</style>
