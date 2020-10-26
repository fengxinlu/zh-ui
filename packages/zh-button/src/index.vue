<template>
<div class="zh-button">{{text}}</div>
</template>

<script>
export default {
  name: 'zh-button',
  data () {
    return {
      text: '测试按需引入button'
    }
  }
}
</script>

<style lang="less" scoped>
@import "./css/index.less";
</style>
