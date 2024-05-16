<template>
  <div id="side">
    <SideHeader />
    <Nuxt />
  </div>
</template>

<script>
import SideHeader from '~/components/SideHeader.vue'

export default {
  components: {
    SideHeader
  }
}
</script>
<style scoped>
@import '~/assets/css/offcanvas.css';
@import '~/assets/css/button.css';
@import '~/assets/css/table.css';
</style>
