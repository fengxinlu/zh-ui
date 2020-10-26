<template>
<div class="zh-text">{{text || defaultText}}</div>
</template>

<script>
export default {
  name: 'zh-text',
  props: {
    text: String
  },
  data () {
    return {
      defaultText: '测试按需引入Text'
    }
  }
}
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>
