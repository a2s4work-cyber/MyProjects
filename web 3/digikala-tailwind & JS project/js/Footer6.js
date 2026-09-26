async function getFooter6() {
  try {
    let res = await fetch("http://localhost:3004/footer6");
    if (res.ok) {
      let data = await res.json();
      data.smItems.map((footer6) => {
        document.querySelector(".footer-6 .desc .items").innerHTML +=
          `<div class="flex justify-between items-center border-b border-[rgb(240,240,241)] pb-2 mb-3 ">
            <div class="flex gap-1 justify-between items-center">
            <img class="w-9 rounded-full" src=${footer6.image1} >
            <div>
              <h2 class="text-[10px] font-bold text-[rgb(66,71,80)]">${footer6.h1}</h2>
              <span class="text-[12px] text-[rgb(129,133,139)]">${footer6.span1}</span>
            </div>
           </div>
           <div>
             <span class="text-[rgb(66,71,80)] text-[11px] bg-[#f2f2f2] p-2 rounded-full font-bold">${footer6.span2One}</span>
           </div>
          </div>
          <div class="flex justify-between items-center border-b border-[rgb(240,240,241)] pb-2 mb-2 ">
            <div class="flex gap-1 justify-between items-center">
            <img class="w-8 rounded-full" src=${footer6.image2} >
            <div>
              <h2 class="text-[10px] font-bold text-[rgb(66,71,80)]">${footer6.h1Two}</h2>
              <span class="text-[12px] text-[rgb(129,133,139)]">${footer6.span2}</span>
            </div>
           </div>
           <div>
             <span class="text-[rgb(66,71,80)] text-[11px] bg-[#f2f2f2] p-2 rounded-full font-bold">${footer6.span2Two}</span>
           </div>
          </div>
          <div class="flex justify-between items-center border-b border-[rgb(240,240,241)] pb-2 mb-2 ">
            <div class="flex gap-1 justify-between items-center">
            <div>
              <h2 class="text-[12px] font-bold text-[rgb(66,71,80)]">${footer6.h2Three}</h2>
            </div>
           </div>
           <div>
             <img class="w-5 cursor-pointer" src=${footer6.pointer} >
           </div>
          </div>
          <div class="flex justify-between items-center border-b border-[rgb(240,240,241)] pb-2 mb-2 ">
            <div class="flex gap-1 justify-between items-center">
            <div>
              <h2 class="text-[12px] font-bold text-[rgb(66,71,80)]">${footer6.h2Four}</h2>
            </div>
           </div>
           <div>
             <img class="w-5 cursor-pointer" src=${footer6.pointer} >
           </div>
          </div>
          <div class="flex justify-between items-center border-b border-[rgb(240,240,241)] pb-2 mb-2 ">
            <div class="flex gap-1 justify-between items-center">
            <div>
              <h2 class="text-[12px] font-bold text-[rgb(66,71,80)]">${footer6.h2Five}</h2>
            </div>
           </div>
           <div>
             <img class="w-5 cursor-pointer" src=${footer6.pointer} >
           </div>
          </div>
          <div class="flex justify-between items-center border-b border-[rgb(240,240,241)] pb-2 mb-2 ">
            <div class="flex gap-1 justify-between items-center">
            <div>
              <h2 class="text-[12px] font-bold text-[rgb(66,71,80)]">${footer6.h2Six}</h2>
            </div>
           </div>
           <div>
             <img class="w-5 cursor-pointer" src=${footer6.pointer} >
           </div>
          </div>`;
      });
      data.desc.map((footer6) => {
        document.querySelector(".footer-6 .desc").innerHTML +=
          `<h1 class="text-[#62666d]  lg:text-[25px] font-medium mb-1.25">${footer6.h1}</h1>
        <span class="text-[10px] lg:text-[17px] text-[#62666d] mb-1.24 pl-7.5 leading-7">${footer6.span1}</span>
        <div class="flex flex-row items-center">
         <span class="more lg:text-[#19bfd3] text-[14px] text-[#]">${footer6.span2}</span>
         <img class="w-5 pt-1" src=${footer6.pointer} >
        </div>`;
      });
      data.logos.map((footer6) => {
        document.querySelector(".footer-6").innerHTML +=
          `<div class="logos hidden lg:flex justify-center max-h-30 ">
        <div class="logo border border-solid border-[#e0e0e2] rounded-lg mr-2 p-4"><img class="max-w-18.75 min-w-18.75" src=${footer6.image1} ></div>
        <div class="logo border border-solid border-[#e0e0e2] rounded-lg mr-2 p-4"><img class="max-w-18.75 min-w-18.75" src=${footer6.image2} ></div>
        <div class="logo border border-solid border-[#e0e0e2] rounded-lg mr-2 p-4"><img class="max-w-18.75 min-w-18.75" src=${footer6.image3} ></div>
        <div class="logo border border-solid border-[#e0e0e2] rounded-lg mr-2 p-4"><img class="max-w-18.75 min-w-18.75" src=${footer6.image4} ></div>
      </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getFooter6;
