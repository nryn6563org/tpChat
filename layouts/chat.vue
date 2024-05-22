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
    if (process.client) {
      const viewportWidth = window.innerWidth
      let newContent = ''

      if (viewportWidth > 600) {
        newContent = 'width=device-width, initial-scale=1.0, user-scalable=no'
      } else if (viewportWidth <= 600) {
        newContent = 'width=360px'
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
    return {}
  }
}
</script>

<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
