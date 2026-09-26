async function getSection4Mobile() {
  try {
    let res = await fetch("http://localhost:3004/section4");
    if (res.ok) {
      let data = await res.json();
      data.mobileTimer.map((section4) => {
        document.querySelector(
          ".section4-sm-size .whole .amazing-sm",
        ).innerHTML += `<div class="time-img flex gap-3">
              <div class="imgs flex gap-1.5">
                <img class="w-9" src=${section4.image} >
                <img class="w-16" src=${section4.image2} >
              </div>
              <div class="times flex flex-row justify-center items-center gap-0.5 text-[10px]">
                <div class="time bg-white rounded-sm p-1.25 w-6 h-6 flex items-center justify-center">${section4.sec}</div>
                <div><span>:</span></div>
                <div class="time bg-white rounded-sm p-1.25 w-6 h-6 flex items-center justify-center">${section4.min}</div>
                <div><span>:</span></div>
                <div class="time bg-white rounded-sm p-1.25 w-6 h-6 flex items-center justify-center">${section4.hour}</div>
              </div>
            </div>
            <div class="more flex text-[10px] text-white items-center">
              <span>${section4.title}</span>
              <img class="w-5 h-5" src=${section4.image3} >
            </div>`;
      });
      data.firstSlide.map((section4) => {
        document.querySelector(
          ".section4-sm-size .whole .swiper-wrapper",
        ).innerHTML += `<div class="swiper-slide h-auto! max-w-37.5">
                <a href="#" class="product-card flex items-center flex-col p-3 bg-white rounded-tr-2xl rounded-br-2xl h-full sm:mr-1.5 lg:mr-0">
                  <img src=${section4.image} class="w-full mb-2">
                  <h3 class="text-xs text-gray-600 line-clamp-2 mb-2">${section4.h3}</h3>
                  <div class="price w-full">
                    <div class="flex flex-row items-center justify-between mb-1">
                      <div class="off text-white bg-[#d32f2f] rounded-[30px] px-2 py-0.5 text-xs">${section4.off}</div>
                      <div class="flex flex-row items-center gap-1 text-sm">
                        <span>${section4.priceOff}</span>
                        <img src=${section4.toman} class="w-4">
                      </div>
                    </div>
                    <span class="before-price block text-left text-xs text-gray-400 line-through">${section4.price}</span>
                  </div>
                </a>
              </div>`;
      });
      data.slider.map((_section4) => {
        document.querySelector(
          ".section4-sm-size .whole .swiper-wrapper",
        ).innerHTML += `<div class="swiper-slide h-auto! max-w-37.5">
                <a href="#" class="product-card flex items-center flex-col p-3 bg-white h-full ">
                  <img src=${data.slider[0].image}  class="w-full mb-2">
                  <h3 class="text-xs text-gray-600 line-clamp-2 mb-2">${data.slider[0].h3}</h3>
                  <div class="price w-full">
                    <div class="flex flex-row items-center justify-between mb-1">
                      <div class="off text-white bg-[#d32f2f] rounded-[30px] px-2 py-0.5 text-xs">${data.slider[0].off}</div>
                      <div class="flex flex-row items-center gap-1 text-sm">
                        <span>${data.slider[0].priceOff}</span>
                        <img src=${data.slider[0].toman} class="w-4">
                      </div>
                    </div>
                    <span class="before-price block text-left text-xs text-gray-400 line-through">${data.slider[0].price}</span>
                  </div>
                </a>
              </div>
              <div class="swiper-slide h-auto! max-w-37.5">
                <a href="#" class="product-card flex items-center flex-col p-3 bg-white h-full ">
                  <img src=${data.slider[1].image}  class="w-full mb-2">
                  <h3 class="text-xs text-gray-600 line-clamp-2 mb-2">${data.slider[0].h3}</h3>
                  <div class="price w-full">
                    <div class="flex flex-row items-center justify-between mb-1">
                      <div class="off text-white bg-[#d32f2f] rounded-[30px] px-2 py-0.5 text-xs">${data.slider[0].off}</div>
                      <div class="flex flex-row items-center gap-1 text-sm">
                        <span>${data.slider[0].priceOff}</span>
                        <img src=${data.slider[0].toman} class="w-4">
                      </div>
                    </div>
                    <span class="before-price block text-left text-xs text-gray-400 line-through">${data.slider[0].price}</span>
                  </div>
                </a>
              </div>`;
      });
      data.lastSlide.map((section4) => {
        document.querySelector(
          ".section4-sm-size .whole .swiper-wrapper",
        ).innerHTML += `<div class="swiper-slide h-auto! max-w-37.5">
                <a href="#" class="flex items-center justify-center flex-col bg-white rounded-bl-2xl rounded-tl-2xl h-full ml-4 p-4">
                  <img class="w-12 h-12 mb-2" src=${section4.image} alt="">
                  <span class="text-sm font-normal text-gray-600">${section4.title}</span>
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
export default getSection4Mobile;

//from-[#91c143] to-[#6db929]
//color
