async function getSection13() {
  try {
    let res = await fetch("http://localhost:3004/section13&section16");
    if (res.ok) {
      let data = await res.json();
      data.header.map((section13) => {
        document.querySelector(".section13 .whole .title").innerHTML +=
          `<span class="text-xs lg:text-xl" >${section13.title}</span>`;
      });
      data.slides.map((section13) => {
        document.querySelector(".section13 .whole .swiper-wrapper").innerHTML +=
          ` <div class="swiper-slide h-auto! w-auto! ">
                <div class="items flex justify-evenly items-center border border-[#5f5f5f3a] lg:border-0 rounded-2xl mb-1.5">
                   <img class="flex items-center object-contain max-w-21.5 max-h-21.5 rounded-r-2xl" src=${section13.image1} >
                   <span class="counter text-[11.2px] lg:text-[26px] font-extrabold text-white lg:text-[#19bfd3] bg-rose-500 lg:bg-white rounded-full px-2 py-1 ml-3 ">${section13.number1}</span>
                   <span class="description text-[11.2px] font-normal text-[#3f4064] lg:border-b border-[#a8a8a83a] line-clamp-1 lg:pb-1">${section13.span1}
                   </span>
                  </div>
                <div class="items flex justify-evenly items-center border border-[#5f5f5f3a] lg:border-0 rounded-2xl mb-1.5">
                   <img class="flex items-center object-contain max-w-21.5 max-h-21.5 rounded-r-2xl" src=${section13.image2} >
                   <span class="counter text-[11.2px] lg:text-[26px] font-extrabold text-white lg:text-[#19bfd3] bg-rose-500 lg:bg-white rounded-full px-2 py-1 ml-3 ">${section13.number2}</span>
                   <span class="description text-[11.2px] font-normal text-[#3f4064] lg:border-b border-[#a8a8a83a] line-clamp-1 ml-2 lg:pb-1">${section13.span2}
                   </span>
                  </div>
                <div class="items flex justify-evenly items-center border border-[#5f5f5f3a] lg:border-0 rounded-2xl mb-1.5">
                   <img class="flex items-center object-contain max-w-21.5 max-h-21.5 rounded-r-2xl mr-2" src=${section13.image3} >
                   <span class="counter text-[11.2px] lg:text-[26px] font-extrabold text-white lg:text-[#19bfd3] bg-rose-500 lg:bg-white rounded-full px-2 py-1 ml-3 ">${section13.number3}</span>
                   <span class="description text-[11.2px] font-normal text-[#3f4064] lg:border-b border-[#a8a8a83a] line-clamp-1 lg:pb-1">${section13.span3}
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
export default getSection13;
