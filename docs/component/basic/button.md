---
title: Button
---

# 按钮

<script>
export default {
  data() {
    return {
      button: '默认'
    }
  }
}
</script>

<template>
  <zh-button>{{button}}</zh-button>
  <zh-button type="primary">主色</zh-button>
  <zh-button type="success">成功</zh-button>
  <zh-button type="info">提示</zh-button>
</template>

### 使用

<<< @/examples/views/button.vue#snippet{1}
