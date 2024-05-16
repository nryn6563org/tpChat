<template>
  <div id="container" class="side">
    <div class="page">
      <iframe ref="iframe" :src="iframeSrc" frameborder="0" width="100%"></iframe>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'side',
  data() {
    return {
      iframeSrc: 'https://m.thinkpool.com/'
    }
  },
  mounted() {
    this.resizeIframe()
    window.addEventListener('resize', this.resizeIframe)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeIframe)
  },
  methods: {
    resizeIframe() {
      const windowHeight = window.innerHeight
      this.$refs.iframe.style.height = windowHeight + 'px'
    }
  }
}
</script>

<style scoped>
.page{
  @apply w-full h-[calc(100%-50px)] mt-[50px]
}
</style>
