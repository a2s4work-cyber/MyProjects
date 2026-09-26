async function getSection2() {
  try {
    let res = await fetch("http://localhost:3004/section2");
    if (res.ok) {
      let data = await res.json();
      data.map((section2) => {
        document.querySelector(".section2 .swiper-wrapper").innerHTML +=
          `<div class="swiper-slide justify-center items-center text-center lg:px-0 px-5 py-2"><img class="block object-cover rounded-2xl lg:rounded-none" src=${section2.image} alt=${section2.alt} ></div>`;
      });
      var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection2;
