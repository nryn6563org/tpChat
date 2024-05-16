<template>
  <div id="chat" :style="{ height: layoutHeight, overflow: 'hidden' }">
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
      layoutHeight: '100vh' // Initial height of the layout
    }
  },
  mounted() {
    this.updateLayoutHeight()
    window.addEventListener('resize', this.updateLayoutHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateLayoutHeight)
  },
  methods: {
    updateLayoutHeight() {
      this.layoutHeight = window.innerHeight + 'px'
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
