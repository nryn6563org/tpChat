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
  }
}
</script>
<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';

#chat {
  @apply relative w-full h-full bg-gradient-to-b from-[#F0F6FD] to-[#B1CCED] overflow-hidden;
}
</style>
