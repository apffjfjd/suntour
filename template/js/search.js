const windowOfModal = document.querySelector(".modal");
const openModal = document.querySelector(".modal__btn--open");
const closeModal = document.querySelector(".modal__btn--close");

openModal.addEventListener("click", function () {
  // 모달창 열기
  windowOfModal.open = true;
});

// 모달창 닫기 버튼에 이벤트 리스너 추가
closeModal.addEventListener("click", function () {
  // 모달창 닫기
  windowOfModal.close();
});
