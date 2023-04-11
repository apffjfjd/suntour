const qnaGuideModal = document.querySelector(".qna__guide");
const closeBtnQnaGuide = document.querySelector(".qna__guide--btn-close");

window.addEventListener("load", function () {
  qnaGuideModal.open = true;
});

closeBtnQnaGuide.addEventListener("click", () => {
  qnaGuideModal.close();
});

// closeTalk.addEventListener("click", function () {
//   windowOfTalk.close();
// });

// 메세지 보내기
// sendMessage.addEventListener("click", function(){

// })

// openPaymentPage.addEventListener("click", function () {

// });
