async function getSection1() {
  try {
    let res = await fetch("http://localhost:3004/section1");
    if (res.ok) {
      let data = await res.json();
      data.map((section1) => {
        document.querySelector(".section1 .swiper-wrapper").innerHTML +=
          `<div class="swiper-slide flex flex-col justify-center items-center p-3.75 text-center text-[11px]  ">
              <img class="flex rounded-[50%] outline-2 outline-solid outline-[#800080] outline-offset-2 mb-1.75" src=${section1.image} ><span class="leading-5">${section1.title}</span>
            </div>`;
      });
      var swiper = new Swiper(".mySwiperstory", {
        slidesPerView: 12.5,
        spaceBetween: 0,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection1;
