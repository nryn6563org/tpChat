<template>
  <div class="newsList">
    <div class="swiper-wrapper">
      <button class="news swiper-slide">
        <em class="date">05/05</em>
        <span class="txt">
          삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트 삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트...
        </span>
      </button>

      <button class="news swiper-slide">
        <em class="date">05/05</em>
        <span class="txt">
          삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트 삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트...
        </span>
      </button>

      <button class="news swiper-slide">
        <em class="date">05/05</em>
        <span class="txt">
          삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트 삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트...
        </span>
      </button>

      <button class="news swiper-slide">
        <em class="date">05/05</em>
        <span class="txt">
          삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트 삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트...
        </span>
      </button>

      <button class="news swiper-slide">
        <em class="date">05/05</em>
        <span class="txt">
          삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트 삼성전자에 대해 ‘에네르기파’ 라고 대신증권에서 발표한 리포트...
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const script = document.createElement('script')
    script.src =
      'https://fastly.jsdelivr.net/npm/swiper@10.2.0/swiper-bundle.min.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      const swiper = new Swiper('.newsList', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }).mount()
      //
    }
  }
}
</script>

<style>

</style>
