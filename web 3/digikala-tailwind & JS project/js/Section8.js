async function getSection8() {
  try {
    let res = await fetch("http://localhost:3004/section8");
    if (res.ok) {
      let data = await res.json();
      data.spans.map((section8) => {
        document.querySelector(".section8 .whole").innerHTML +=
          `<div class="flex justify-start lg:justify-center items-center pr-2.5 pt-2 lg:pr-0 gap-3">
            <span class="lg:flex hidden lg:text-xl" >${section8.title1}</span>
            <span class="flex lg:hidden text-xs font-bold">${section8.title2}</span>
          </div>
          <div class="swiper mySwiperr overflow-visible!">
            <div class="swiper-wrapper py-5">
              
            </div>
          </div>`;
      });
      data.slider.map((section8) => {
        document.querySelector(".section8 .swiper-wrapper").innerHTML += `
        <div class="swiper-slide h-auto! w-auto!">
                <div class="items flex flex-col justify-evenly items-center rounded-2xl px-4">
                   <img class="flex items-center object-contain max-w-25 max-h-25 min-w-18 min-h-18" src=${section8.image1} >
                   <span class="description mt-2 text-[12px]">
                    ${section8.title1}
                   </span>
                  </div>
                <div class="items flex flex-col justify-evenly items-center rounded-2xl px-4">
                   <img class="flex items-center object-contain max-w-25 max-h-25 min-w-18 min-h-18" src=${section8.image2}>
                   <span class="description mt-2 text-[12px]">
                   ${section8.title2}
                   </span>
                  </div>  
              </div>
              <div class="swiper-slide h-auto! w-auto!">
                <div class="items flex flex-col justify-evenly items-center rounded-2xl px-4">
                   <img class="flex items-center object-contain max-w-25 max-h-25 min-w-18 min-h-18" src=${section8.image3} >
                   <span class="description mt-2 text-[12px]">
                    ${section8.title3}
                   </span>
                  </div>
                <div class="items flex flex-col justify-evenly items-center rounded-2xl px-4">
                   <img class="flex items-center object-contain max-w-25 max-h-25 min-w-18 min-h-18" src=${section8.image4}>
                   <span class="description mt-2 text-[12px]">
                   ${section8.title4}
                   </span>
                  </div>  
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
export default getSection8;

// swiper example
