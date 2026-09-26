async function getSection14() {
  try {
    let res = await fetch("http://localhost:3004/section12&section14");
    if (res.ok) {
      let data = await res.json();
      data.box1.map((section14) => {
        document.querySelector(".section14 .whole").innerHTML +=
          `<div class="box1 flex flex-col justify-center px-5 py-2 border-l border-solid border-[#80808067]">
            <h3 class="text-[18px]">${section14.h3}</h3>
            <span class="text-[11px]">${section14.span}</span>
            <div class="item flex justify-center items-center">
                <div>
                  <div class="item1 border-l border-b border-solid border-[#a8a8a83a]">
                  <img class="p-2" src=${section14.image1} >
                  </div>
                  <div class="item2 border-l border-solid border-[#a8a8a83a]">
                  <img class="p-2"  src=${section14.image2} >
                  </div>
                </div>
                <div>
                  <div class="item3  border-b border-solid border-[#a8a8a83a]">
                  <img class="p-2" src=${section14.image3}>
                  </div>
                  <div class="item4">
                  <img class="p-2"  src=${section14.image4} >  
                  </div>
                </div>
            </div>
            <span class="more flex justify-center items-center pt-5 text-[12px]">${section14.span2}
            <img class="w-4.5" src=${section14.pointer} >
            </span>
          </div>`;
      });
      data.box2.map((section14) => {
        document.querySelector(".section14 .whole").innerHTML +=
          `<div class="box2 px-5 py-2">
            <h3 class="text-[18px]">${section14.h3}</h3>
            <span class="text-[11px]">${section14.span}</span>
             <div class="item flex justify-center items-center">
                <div>
                  <div class="item1 border-l border-b border-solid border-[#a8a8a83a]">
                  <img class="p-2" src=${section14.image1} >
                  </div>
                  <div class="item2 border-l  border-solid border-[#a8a8a83a]">
                  <img class="p-2"  src=${section14.image2} >
                  </div>
                </div>
                <div>
                  <div class="item3  border-b border-solid border-[#a8a8a83a]">
                  <img class="p-2" src=${section14.image3}>
                  </div>
                  <div class="item4">
                  <img class="p-2"  src=${section14.image4} >  
                  </div>
              </div>
            </div>
            <span class="more flex justify-center items-center pt-5 text-[12px]">${section14.span2}
            <img class="w-4.5" src=${section14.pointer} >
            </span>
          </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection14;
