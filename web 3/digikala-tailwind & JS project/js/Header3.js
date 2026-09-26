async function getHeader3() {
  try {
    let res = await fetch("http://localhost:3004/header3");
    if (res.ok) {
      let data = await res.json();
      data.menuHorizontal.map((Header3) => {
        document.querySelector(".header3 ").innerHTML +=
          `<div class="menu hidden lg:flex justify-start items-center gap-3.75 text-[#62666d] grow shrink-0 text-[12px] font-medium" >
          <div class="item1 flex justify-center items-center gap-1.25 font-bold hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer group relative">
            <img class="w-5" src=${Header3.image1}  /><span>${Header3.span1}</span>
            <div class="sub-menu absolute flex flex-col top-5 left-1 mt-2 justify-start bg-[#dddddd] shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-[12px] ">
              <a href="#" class="flex hover:text-red-500 hover:bg-white p-2.5">${Header3.subMenuspan1}</a>
              <a href="#" class="flex hover:text-red-500 hover:bg-white p-2.5">${Header3.subMenuspan2}</a>
              <a href="#" class="flex hover:text-red-500 hover:bg-white p-2.5">${Header3.subMenuspan3}</a>
              <a href="#" class="flex hover:text-red-500 hover:bg-white p-2.5">${Header3.subMenuspan4}</a>
              <a href="#" class="flex hover:text-red-500 hover:bg-white p-2.5">${Header3.subMenuspan5}</a>
            </div>
          </div>
          <span>|</span>
          <div class="item2 flex justify-center items-center gap-1.25 font-bold hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer ">
            <img class="w-5" src=${Header3.image2}  /><span>${Header3.span2}</span>
          </div>
          <div class="item3 flex justify-center items-center gap-1.25 font-bold hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer ">
            <img class="w-5" src=${Header3.image3}  /><span>${Header3.span3}</span>
          </div>
          <div class="item4 flex justify-center items-center gap-1.25 font-bold hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer ">
            <img class="w-5" src=${Header3.image4}  /><span>${Header3.span4}</span>
          </div>
          <div class="item5 flex justify-center items-center gap-1.25 font-bold
          hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer ">
            <img class="w-5" src=${Header3.image5}  /><span>${Header3.span5}</span>
          </div>
          <span>|</span>
          <div class="item6 flex justify-center items-center gap-1.25 font-bold hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer"><span>${Header3.span6}</span></div>
          <div class="item7 flex justify-center items-center gap-1.25 font-bold hover:border-b-2 hover:border-solid hover:border-red-500 cursor-pointer "><span>${Header3.span7}</span></div>
        </div>`;
      });
      data.city.map((Header3) => {
        document.querySelector(".header3").innerHTML += `
        <div class="city flex items-center">
          <div class="item8 flex flex-row justify-center items-center lg:gap-1.25 lg:p-2.5 lg:bg-[#fef6ef] rounded-4xl grow shrink-0 cursor-pointer">
            <img class="flex lg:hidden w-4 pl-0.5" src=${Header3.image1} >
            <img class="hidden lg:flex max-w-5" src=${Header3.image2}  />
            <span class="flex lg:hidden text-[10px] font-normal text-black pb-0.5">${Header3.span1}</span>
            <span class="hidden lg:flex text-[14px] lg:text-[#f57f17] font-medium">${Header3.span2}</span>

            <img class="flex lg:hidden w-4" src=${Header3.pointer} >
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
export default getHeader3;
