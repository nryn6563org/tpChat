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
  head() {
    const viewportWidth = window.screen.width
    let newContent = ''

    // 예를 들어, 특정 가로 폭 이하에서만 스케일을 조절하고자 한다면
    if (viewportWidth > 600) {
      newContent = 'width=device-width, initial-scale=1.0, user-scalable=no'
    } else if (viewportWidth <= 600) {
      newContent = 'width=360px, user-scalable=no'
    }

    return {
      meta: [
        {
          name: 'viewport',
          content: newContent
        }
      ]
    }
  }
}
</script>

<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
