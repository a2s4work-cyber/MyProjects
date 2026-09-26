async function getFooter8() {
  try {
    let res = await fetch("http://localhost:3004/footer8");
    if (res.ok) {
      let data = await res.json();
      data.row.map((footer8) => {
        document.querySelector(".footer-8 .whole").innerHTML +=
          `<div class="row hidden lg:flex flex-row justify-center items-center border-b border-solid border-[#80808044] outline-offset-100">
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image1}></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image2} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image3} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image4}></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image5} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image6} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image7} ></div>
          <div class="item-end px-5"><img class="w-35 h-7.5" src=${footer8.image8}></div>
        </div>`;
      });
      data.rowEnd.map((footer8) => {
        document.querySelector(".footer-8 .whole").innerHTML +=
          `<div class="rowEnd hidden lg:flex flex-row justify-center items-center outline-offset-100">
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image1} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image2} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image3} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image4} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image5} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image6} ></div>
          <div class="item border-solid border-l border-[#80808044] px-5 py-5"><img class="w-35 h-7.5" src=${footer8.image7} ></div>
          <div class="item-end px-5"><img class="w-35 h-7.5" src=${footer8.image8}></div>
        </div>`;
      });
      data.smApp.map((footer8) => {
        document.querySelector(".footer-8 .whole .sm-size-footer").innerHTML +=
          `<div class="smApp flex justify-between items-center border-b border-t border-[rgb(240,240,241)] py-2 px-4">
            <div class="flex gap-2 justify-between items-center">
            <img class="w-8 rounded-full" src=${footer8.image} >
            <div class="flex flex-col">
              <h2 class="text-[12px] font-bold text-[rgb(66,71,80)]">${footer8.h2}</h2>
              <span class="text-[10px] text-[rgb(129,133,139)]">${footer8.span1}</span>
            </div>
           </div>
           <div>
             <span class="text-[rgb(66,71,80)] text-[11px] bg-[#f2f2f2] py-1.5 px-4 rounded-full font-bold">${footer8.span2}</span>
           </div>
          </div>`;
      });
      data.smBar.map((footer8) => {
        document.querySelector(".footer-8 .whole .sm-size-footer").innerHTML +=
          `<div class="items flex flex-row justify-around items-baseline cursor-pointer bg-white text-[10px] text-[rgb(129,133,139)] pb-1 my-1">
            <div class="flex flex-col items-center">
              <img class="w-9" src=${footer8.image1}>
              <span>${footer8.span1}</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-6" src=${footer8.image2}>
              <span>${footer8.span2}</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-8" src=${footer8.image3}>
              <span>${footer8.span3}</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-7" src=${footer8.image4} >
              <span>${footer8.span4}</span>
            </div>
            <div class="flex flex-col items-center">
              <img class="w-8" src=${footer8.image5} >
              <span>${footer8.span5}</span>
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
export default getFooter8;
