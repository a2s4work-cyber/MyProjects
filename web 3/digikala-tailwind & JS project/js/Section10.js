async function getSection10() {
  try {
    let res = await fetch("http://localhost:3004/section10");
    if (res.ok) {
      let data = await res.json();
      data.title.map((section10) => {
        document.querySelector(".section10 .whole .title").innerHTML +=
          `<img src=${section10.image} class="w-6.25 h-6.25" >
            <span class="text-xl" >${section10.header}</span>`;
      });
      data.slider.map((section10) => {
        document.querySelector(".section10 .whole .swiper-wrapper").innerHTML +=
          `<div class="swiper-slide h-auto! max-w-30  rounded-2xl border-0 lg:border-l border-[#a8a8a83a]">
                <a href="#" class="product-card flex items-center flex-col p-1 bg-white rounded-tr-2xl rounded-br-2xl h-full lg:mr-0">
                  <img src=${section10.image1}  class="w-full  border border-[#80808067] rounded-t-2xl border-b-0 lg:border-0 p-3">
                  <h3 class="text-xs text-gray-600 lg:hidden border border-t-0 border-[#80808067] rounded-b-2xl px-11 pb-1.5">${section10.title1}</h3>
                </a>
              </div>
              <div class="swiper-slide h-auto! max-w-30  rounded-2xl border-0 lg:border-l border-[#a8a8a83a]">
                <a href="#" class="product-card flex items-center flex-col p-1 bg-white rounded-tr-2xl rounded-br-2xl h-full lg:mr-0">
                  <img src=${section10.image2}  class="w-full  border border-[#80808067] rounded-t-2xl border-b-0 lg:border-0 p-3">
                  <h3 class="text-xs text-gray-600 lg:hidden border border-t-0 border-[#80808067] rounded-b-2xl px-10 pb-1.5">${section10.title2}</h3>
                </a>
              </div>
              <div class="swiper-slide h-auto! max-w-30  rounded-2xl border-0 lg:border-l border-[#a8a8a83a]">
                <a href="#" class="product-card flex items-center flex-col p-1 bg-white rounded-tr-2xl rounded-br-2xl h-full lg:mr-0">
                  <img src=${section10.image3}  class="w-full border border-[#80808067] rounded-t-2xl border-b-0 lg:border-0 p-3">
                  <h3 class="text-[10px] text-gray-600 lg:hidden border border-t-0 border-[#80808067] rounded-b-2xl px-10.5 pb-1.5">${section10.title2}</h3>
                </a>
              </div>
              `;
      });
      data.lastSlide.map((section10) => {
        document.querySelector(".section10 .whole .swiper-wrapper").innerHTML +=
          `<div class="swiper-slide h-auto! max-w-30  rounded-2xl border-0  border-[#a8a8a83a]">
                <a href="#" class="product-card flex items-center flex-col p-1 bg-white rounded-tr-2xl rounded-br-2xl h-full lg:mr-0">
                  <img src=${section10.image}  class="w-full  border border-[#80808067] rounded-t-2xl border-b-0 lg:border-0 p-3">
                  <h3 class="text-xs text-gray-600 lg:hidden border border-t-0 border-[#80808067] rounded-b-2xl px-11  pb-1.5">${section10.title}</h3>
                </a>
              </div>`;
      });
      var swiper = new Swiper(".mySwiperr", {
        slidesPerView: "auto",
        spaceBetween: 5,
        freeMode: true,
        threshold: 5,
        resistance: true,
        resistanceRatio: 0,
        freeModeSticky: false,
        watchSlidesProgress: true,
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection10;
