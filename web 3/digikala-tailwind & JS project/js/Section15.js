async function getSection15() {
  try {
    let res = await fetch("http://localhost:3004/section15");
    if (res.ok) {
      let data = await res.json();
      data.title.map((section15) => {
        document.querySelector(".section15 .whole .title").innerHTML +=
          `<img src=${section15.image} >
            <span>${section15.span}</span>`;
      });
      data.row.map((section15) => {
        document.querySelector(".section15 .whole").innerHTML +=
          `<div class="row flex justify-center items-center border-b border-solid border-[#9c9c9c21]">
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image1} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img class="w-4 h-4" src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image2} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image3} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image4} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image5} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item-end flex flex-col">
              <img src=${section15.image6} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
          </div>`;
      });
      data.rowEnd.map((section15) => {
        document.querySelector(".section15 .whole").innerHTML +=
          `<div class="row-end flex justify-center items-center">
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image1} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image2} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image3} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image4} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item flex flex-col border-l border-solid border-[#9c9c9c21]">
              <img src=${section15.image5} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
            </div>
            <div class="item-end flex flex-col">
              <img src=${section15.image6} >
              <div class="price flex items-center justify-around">
                <div class="percent rounded-full text-[12px] font-bold text-white p-1 bg-[#d32f2f]">${section15.percent}</div>
                <div class="flex items-center span-img text-[16px]">
                  <span>${section15.off}</span>
                  <img src=${section15.toman} >
                </div>
              </div>
              <span class="off flex line-through justify-end pl-11.25 text-[#808080]">${section15.price}</span>
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
export default getSection15;
