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
      layoutHeight: '100%' // Initial height of the layout
    }
  },
  mounted() {
    this.updateLayoutHeight()
    window.addEventListener('resize', this.updateLayoutHeight)

    // 이벤트 리스너 추가: 입력 필드에 포커스가 생기거나 사라질 때
    document.addEventListener('focusin', this.updateLayoutHeight)
    document.addEventListener('focusout', this.updateLayoutHeight)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateLayoutHeight)
    document.removeEventListener('focusin', this.updateLayoutHeight)
    document.removeEventListener('focusout', this.updateLayoutHeight)
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
