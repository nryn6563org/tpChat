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
  mounted() {
    this.scroll = 0
    this.iosAsideGap = 0

    this.bodyEl = document.body
    this.htmlEl = document.getElementsByTagName('html')[0]

    window.visualViewport.onresize = this.scrollMove.bind(this)
  },
  methods: {
    scrollMove() {
      const currentVisualViewport = window.visualViewport.height
      if (this.htmlEl.classList.contains('keyboard--on')) {
        const scrollHeight = window.document.scrollingElement.scrollHeight
        this.iosAsideGap = scrollHeight - currentVisualViewport
        window.scrollTo(0, this.iosAsideGap)
        this.bodyEl.style.top = `${-(this.scroll - this.iosAsideGap)}px`
      }
    },
    active() {
      this.scroll = window.scrollY
      this.htmlEl.classList.add('keyboard--on')
      this.bodyEl.style.top = `${-this.scroll}px`
    },
    reset() {
      this.htmlEl.classList.remove('keyboard--on')
      this.bodyEl.style.removeProperty('top')
      window.scrollTo(0, this.scroll)
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
