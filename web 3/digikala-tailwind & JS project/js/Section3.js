async function getSection3() {
  try {
    let res = await fetch("http://localhost:3004/section3");
    if (res.ok) {
      let data = await res.json();
      data.map((section3) => {
        document.querySelector(".section3 .swiper-wrapper").innerHTML += `
        <div class="swiper-slide h-auto! w-auto!">
                <div class="items flex flex-col justify-evenly items-center rounded-2xl px-4">
                   <img class="flex items-center object-contain max-w-13 max-h-13 " src=${section3.image} >
                   <span class="description mt-2 text-[12px]">
                    ${section3.title}
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
export default getSection3;
