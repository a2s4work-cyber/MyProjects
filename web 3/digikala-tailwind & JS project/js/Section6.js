async function getSection6() {
  try {
    let res = await fetch("http://localhost:3004/section6");
    if (res.ok) {
      let data = await res.json();
      data.rightSec.map((section6) => {
        document.querySelector(".section6 .box").innerHTML +=
          `<div class="imgs flex items-center justify-start gap-1.25 grow shrink-0 mr-7.5">
            <div class="sabad"><img class="w-16.5" src=${section6.img1}></div>
            <div class="text-amz"><img class="w-62.5" src=${section6.img2}></div>
            <span class="flex text-[14px] font-bold text-white bg-[#029a49] p-2.5 rounded-[18px] ">${section6.span}</span>
          </div>`;
      });
      data.leftSec.map((section6) => {
        document.querySelector(".section6 .box").innerHTML +=
          `<div class="products flex flex-row justify-end items-center mr-4 bg-no-repeat bg-[url('../img/section6-background.svg')] p-3.75 shrink-0">
            <div class="item relative ml-1.25 mb-1.25">
              <img class="rounded-[50px] max-w-14.5" src=${section6.img1}>
              <span class="percent absolute top-12.5 -right-2 text-[10px] font-bold text-white bg-[#d32f2f] rounded-[44%] p-0.75">${section6.span1}</span>
            </div>
            <div class="item relative ml-1.25 mb-1.25">
              <img class="rounded-[50px] max-w-14.5" src=${section6.img2}>
              <span class="percent absolute top-12.5 -right-2 text-[10px] font-bold text-white bg-[#d32f2f] rounded-[44%] p-0.75">${section6.span2}</span>
            </div>
            <div class="item relative ml-1.25 mb-1.25">
              <img class="rounded-[50px] max-w-14.5" src=${section6.img3}>
              <span class="percent absolute top-12.5 -right-2 text-[10px] font-bold text-white bg-[#d32f2f] rounded-[44%] p-0.75">${section6.span3}</span>
            </div>
            <div class="item relative ml-1.25 mb-1.25">
              <img class="rounded-[50px] max-w-14.5" src=${section6.img1}>
              <span class="percent absolute top-12.5 -right-2 text-[10px] font-bold text-white bg-[#d32f2f] rounded-[44%] p-0.75">${section6.span1}</span>
            </div>
            <div class="item relative ml-1.25 mb-1.25">
              <img class="rounded-[50px] max-w-14.5" src=${section6.img2}>
              <span class="percent absolute top-12.5 -right-2 text-[10px] font-bold text-white bg-[#d32f2f] rounded-[44%] p-0.75">${section6.span2}</span>
            </div>
            <div class="item relative ml-1.25 mb-1.25">
              <img class="rounded-[50px] max-w-14.5" src=${section6.img3}>
              <span class="percent absolute top-12.5 -right-2 text-[10px] font-bold text-white bg-[#d32f2f] rounded-[44%] p-0.75">${section6.span3}</span>
            </div>
            <div class="more flex items-center text-[#029a49] bg-white rounded-[18px] p-2.5 text-[12px] font-bold grow"><span>${section6.span4}</span><img class="w-5" src=${section6.img4}></div>
          </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection6;
