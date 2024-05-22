<template>
  <div id="chat">
    <ChatHeader />
    <Nuxt />
    <ChatFooter />
  </div>
</template>

<script>
import ChatHeader from '~/components/ChatHeader.vue'
import ChatFooter from '~/components/ChatFooter.vue'

export default {
  components: {
    ChatHeader,
    ChatFooter
  },
  data() {
    return {
      viewportContent: 'width=device-width, initial-scale=1'
    }
  },
  head() {
    return {
      meta: [
        { name: 'viewport', content: this.viewportContent }
      ]
    }
  },
  mounted() {
    this.updateViewport()
    window.addEventListener('resize', this.updateViewport)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateViewport)
  },
  methods: {
    updateViewport() {
      const width = window.screen.width
      if (width >= 600) {
        this.viewportContent = 'width=device-width, initial-scale=1'
      } else if (width <= 600) {
        this.viewportContent = 'width=360px, initial-scale=no'
      } else {
        this.viewportContent = 'width=device-width, initial-scale=1'
      }
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
