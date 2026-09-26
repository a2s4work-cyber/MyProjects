async function getHeaderSm() {
  try {
    let res = await fetch("http://localhost:3004/headerSm");
    if (res.ok) {
      let data = await res.json();
      data.map((HeaderSm) => {
        document.querySelector(".headerSm .whole .swiper-wrapper").innerHTML +=
          `
              <div class="swiper-slide  w-auto!">
                <div class="item flex flex-col justify-center items-center bg-white rounded-2xl grow cursor-pointer outline px-3 py-3 
                md:px-12 outline-[#dfdfdf]">
                 <img class="w-6" src=${HeaderSm.image1} >
                 <span>${HeaderSm.span1}</span>
                </div> 
              </div>
              <div class="swiper-slide  w-auto!">
                <div class="item flex flex-col justify-center items-center bg-[#e40138] rounded-2xl grow cursor-pointer px-5 py-3
                md:px-12">
                  <img class="w-9" src=${HeaderSm.image2} >
                  <span>${HeaderSm.span2}</span>
                </div>
              </div>
              <div class="swiper-slide  w-auto!">
                <div class="item flex flex-col justify-center items-center bg-white rounded-2xl grow cursor-pointer outline px-3 py-3
                md:px-12 outline-[#dfdfdf]">
                  <img class="w-[29.1px]" src=${HeaderSm.image3} >
                  <span>${HeaderSm.span3}</span>
                </div> 
              </div>
              <div class="swiper-slide  w-auto!">
                <div class="item flex flex-col justify-center items-center bg-white rounded-2xl grow cursor-pointer  outline px-3 py-3
                md:px-12 outline-[#dfdfdf]">
                  <img class="w-[31.2px]" src=${HeaderSm.image4} >
                  <span>${HeaderSm.span4}</span>
                </div>  
              </div>
              <div class="swiper-slide  w-auto!">
                <div class="item flex flex-col justify-center items-center bg-white rounded-2xl grow cursor-pointer  outline px-3 py-3
                md:px-12 outline-[#dfdfdf]">
                  <img class="w-[32.7px]" src=${HeaderSm.image5} >
                  <span>${HeaderSm.span5}</span>
                </div>  
              </div>
              <div class="swiper-slide  w-auto!">
                <div class="item flex flex-col justify-center items-center bg-white rounded-2xl grow cursor-pointer outline px-3 py-3
                md:px-12 outline-[#dfdfdf]">
                  <img class="w-[29.7px]" src=${HeaderSm.image6} >
                  <span>${HeaderSm.span6}</span>
                </div> 
              </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getHeaderSm;
