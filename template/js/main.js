// 풀사이즈 캐러셀 요소 변수 설정
const carouselSlideFull = document.querySelector(".carousel--theme-full");
const carouselImagesFull = document.querySelectorAll(
  ".carousel__box--theme-full"
);
const prevBtnFull = document.querySelector(".btn--theme-full.prev");
const nextBtnFull = document.querySelector(".btn--theme-full.next");

// 4분할 사이즈 캐러셀 요소 변수 설정
const carouselSlides2 = document.querySelector(".carousel--theme-div2");
const carouselImages2 = document.querySelectorAll(".carousel__box--theme-div2");
const prevBtn2 = document.querySelector(".btn--theme-div2.prev");
const nextBtn2 = document.querySelector(".btn--theme-div2.next");

// 첫 화면 세팅
let counter = 0;
const widthFull = carouselImagesFull.length;
const fullSize = carouselImagesFull[0].getBoundingClientRect()["width"];
const Size2 = carouselImages2[0].clientWidth;

carouselSlideFull.style.transform = "translateX(" + -fullSize * counter + "px)";
carouselSlideFull.style.width = `${100 * widthFull}vw`;

carouselSlides2.style.transform = "translateX(" + -Size2 * counter + "px)";

// 풀사이즈 캐러셀 버튼 클릭 이벤트 제어
nextBtnFull.addEventListener("click", () => {
  if (counter >= carouselImagesFull.length - 1) {
    carouselSlideFull.style.transition = "none";
    counter = 0;
    carouselSlideFull.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  } else {
    carouselSlideFull.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlideFull.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  }
});

prevBtnFull.addEventListener("click", () => {
  if (counter <= 0) {
    carouselSlideFull.style.transition = "none";
    counter = carouselImagesFull.length - 1;
    carouselSlideFull.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  } else {
    carouselSlideFull.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlideFull.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  }
});

// 4분할 사이즈 캐러셀 버튼 클릭 이벤트 제어
nextBtn2.addEventListener("click", () => {
  if (counter >= Math.floor(carouselImages2.length / 4)) {
    carouselSlides2.style.transition = "none";
    counter = 0;
    carouselSlides2.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  } else {
    carouselSlides2.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlides2.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  }
});

prevBtn2.addEventListener("click", () => {
  if (counter <= 0) {
    carouselSlides2.style.transition = "none";
    counter = carouselImages2.length - 1;
    carouselSlides2.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  } else {
    carouselSlides2.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlides2.style.transform =
      "translateX(" + -fullSize * counter + "px)";
  }
});
