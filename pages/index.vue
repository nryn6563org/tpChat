<template>
  <!-- chat 활성화시 class='activeChat' -->
  <section id="container">
    <div class="main">
      <div class="top">
        <img src="~/assets/image/bot.png" alt="봇 이미지" width="91">
        <strong>무엇을 알려드릴까요?</strong>
        <span>최신 이슈와 종목 동향을 빠르게 알려드립니다.</span>
      </div>
<!--   top   -->

      <div class="row-btn-group">
        <button class="btn btn-sm btn-primary">삼성전자</button>
        <button class="btn btn-sm btn-primary">셀트리온</button>
        <button class="btn btn-sm btn-primary">SK하이닉스</button>
      </div>
<!--   가로 버튼 그룹   -->

      <div class="col-btn-group">
        <button class="btn btn-md btn-default">오늘장 시장이슈 알려줘!</button>
        <button class="btn btn-md btn-default">오늘 거래량 상위종목좀 알려줘!</button>
      </div>
</div>
  </section>
</template>

<script>
export default {
  name: 'ChatMain',
  layout: 'chat'
}
</script>
<style scoped>
@import '~/assets/css/main.css';
</style>
