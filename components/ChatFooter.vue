<template>
  <div id="footer">
    <footer>
      <button class="menu" @click="openOffcanvas">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M17 12C17 12.5523 17.4477 13 18 13C18.5523 13 19 12.5523 19 12C19 11.4477 18.5523 11 18 11C17.4477 11 17 11.4477 17 12Z" stroke="#616367" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#616367" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 12C5 12.5523 5.44772 13 6 13C6.55228 13 7 12.5523 7 12C7 11.4477 6.55228 11 6 11C5.44772 11 5 11.4477 5 12Z" stroke="#616367" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </button>
      <!--  menu  -->

      <div class="sch-input-group">
        <input id="chat_txt" v-model="inputValue" @click="toggleOffcanvas" name="" type="text">
        <label for="chat_txt">
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 3L7 8M12 3L17 8M12 3V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </label>
      </div>
      <!--  sch-input-group  -->
    </footer>

    <div
      class="auto-list-w"
      :class="{ 'open' : isOpen }">
      <div class="auto-list animate__animated animate__fadeInUp">
        <div class="alist">
          <button><span><em>삼성전자</em> 분석해줘!</span></button>
          <button><span><em>삼성전자</em> 현재가 보여줘!</span></button>
          <button><span><em>삼성전자</em> 매매신호 알려줘!</span></button>
          <button><span>외국인이 <em>삼성전자</em> 순매수한 수량 알려줘!</span></button>
          <button><span><em>삼성전자</em> 최근 리포트 보여줘!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
          <button><span><em>삼성전자</em> 실적이 궁금해!</span></button>
        </div>
      </div>
      <!--  auto list  -->

      <div class="auto-list-overlay animate__animated animate__fadeIn animate__faster" @click="closeOffcanvas"></div>
      <!--  overlay  -->
    </div>

    <div class="offcanvas-bottom" :class="{ 'active' : isActive}">
      <div class="offfcanvas animate__animated animate__fadeInUp animate__faster">
        <div class="top">
          <strong>이렇게 사용해 보세요!</strong>
          <span>채팅창에 입력할 단어가 정확하게 생각나지 않는다면 아래 키워드에서 찾아보세요~</span>
        </div>
        <!--   top   -->
        <div class="cont">
          <article>
            <strong>AI 정보분석</strong>

            <div class="col-btn-group">
              <button class="btn btn-md btn-default-black">삼성전자 분석해줘</button>
              <button class="btn btn-md btn-default-black">외국인이 삼성전자 순매수한 수량 알려줘!</button>
            </div>
          </article>
          <!--    묶음    -->
        </div>
        <!--   cont   -->
        <div class="close">
          <button @click="closeOffcanvas">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 5L19 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19 5L5 19" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
        <!--   닫기버튼   -->
      </div>

      <div class="overlay animate__animated animate__fadeIn animate__faster" @click="closeOffcanvas"></div>
    </div>
    <!--  offcanvas  -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
      isOpen: false,
      isActive: false
    }
  },
  methods: {
    toggleOffcanvas() {
      this.isOpen = !this.isOpen
      document.body.classList.add('keyOn')
    },
    openOffcanvas() {
      this.isActive = true
    },
    closeOffcanvas() {
      this.isOpen = false
      this.isActive = false
      document.body.classList.remove('keyOn')
    }
  }
}
</script>

<style scoped>
</style>
