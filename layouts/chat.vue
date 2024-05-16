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
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
      input.addEventListener('focus', this.disableScroll)
      input.addEventListener('blur', this.enableScroll)
    })
  },
  beforeDestroy() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
      input.removeEventListener('focus', this.disableScroll)
      input.removeEventListener('blur', this.enableScroll)
    })
  },
  methods: {
    disableScroll() {
      document.body.style.overflow = 'hidden'
    },
    enableScroll() {
      document.body.style.overflow = ''
    }
  }
}
</script>
<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
