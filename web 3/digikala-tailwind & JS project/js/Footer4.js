async function getFooter4() {
  try {
    let res = await fetch("http://localhost:3004/footer4");
    if (res.ok) {
      let data = await res.json();
      data.firstT.map((footer4) => {
        document.querySelector(".footer-4").innerHTML +=
          `<div class="item flex flex-col gap-2.5 w-auto! h-auto!">
        <h1 class="font-bold text-[16px] text-[#3f4064] m-2">${footer4.title}</h1>
        <span class="text-[15px]">${footer4.span1}</span>
        <span class="text-[15px]">${footer4.span2}</span>
        <span class="text-[15px]">${footer4.span3}</span>
        <span class="text-[15px]">${footer4.span4}</span>
        <span class="text-[15px]">${footer4.span5}</span>
        <span class="text-[15px]">${footer4.span6}</span>
      </div>`;
      });
      data.secondT.map((footer4) => {
        document.querySelector(".footer-4").innerHTML +=
          `<div class="item flex flex-col gap-2.5 w-auto! h-auto!">
        <h1 class="font-bold text-[16px] text-[#3f4064] m-2">${footer4.title}</h1>
        <span class="text-[15px]">${footer4.span1}</span>
        <span class="text-[15px]">${footer4.span2}</span>
        <span class="text-[15px]">${footer4.span3}</span>
        <span class="text-[15px]">${footer4.span4}</span>
        <span class="text-[15px]">${footer4.span5}</span>
      </div>`;
      });
      data.thirdT.map((footer4) => {
        document.querySelector(".footer-4").innerHTML +=
          `<div class="item flex flex-col gap-2.5 w-auto! h-auto!">
        <h1 class="font-bold text-[16px] text-[#3f4064] m-2">${footer4.title}</h1>
        <span class="text-[15px]">${footer4.span1}</span>
        <span class="text-[15px]">${footer4.span2}</span>
        <span class="text-[15px]">${footer4.span3}</span>
      </div>`;
      });
      data.last.map((footer4) => {
        document.querySelector(".footer-4").innerHTML +=
          `<div class="item flex flex-col gap-2.5 w-auto! h-auto!">
        <h1 class="font-bold text-[16px] text-[#3f4064] m-2">${footer4.title}</h1>
        <div class="imgs flex w-[70%] flex-row justify-between">
         <a href="#"><img class="w-10" src=${footer4.image1} ></a>
         <a href="#"><img class="w-10" src=${footer4.image2} ></a>
         <a href="#"><img class="w-10" src=${footer4.image3} ></a>
         <a href="#"><img class="w-10" src=${footer4.image4} ></a>
        </div>
        <h1>${footer4.h1}</h1>
        <div class="email flex justify-between">
          <input class="py-2 px-4 rounded-sm border-0 bg-[#f0f0f1] caret-red-500 text-[20px] outline-0" type="email" placeholder="ایمیل شما">
          <button class="p-2.5 border-0 rounded-[5px] text-[20px] text-white bg-[#e0e0e2]">${footer4.button}</button>
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
export default getFooter4;
