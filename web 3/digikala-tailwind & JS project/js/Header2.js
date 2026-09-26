async function getHeader2() {
  try {
    let res = await fetch("http://localhost:3004/header2");
    if (res.ok) {
      let data = await res.json();
      data.rightSide.map((Header2) => {
        document.querySelector(".header2 ").innerHTML += `
        <div class="logoIconSearch flex flex-row gap-5 items-center w-full lg:w-[43%] mr-2 lg:mr-0">
          <div class="logo hidden lg:flex justify-center items-center "><img class="max-w-48.75 hidden lg:flex " src=${Header2.digiLogo}  /></div>

          <div class="icon-search flex lg:justify-items-start items-center  grow shrink-0 rounded-full bg-white lg:bg-[#f0f0f1] outline outline-[#dfdfdf] lg:outline-0 ">
            <div class="icon">
              <img class="flex w-6 lg:p-0 mr-2" src=${Header2.magnifier}  />
            </div>

            <div class="search flex items-start w-full relative py-2">
              <img class="flex lg:hidden absolute w-12 top-3.5 right-16.25" src=${Header2.typography} >
              <input class="flex lg:hidden bg-white text-[14px] font-bold px-1 outline-0 w-[inherit]" type="search" placeholder="جستجو در" id="search" />
              <img class="flex lg:hidden w-6 rounded-2xl ml-1.5" src=${Header2.magCam} >
              <input class="hidden lg:flex lg:bg-[#f0f0f1] text-[14px] font-semibold p-1 rounded-full outline-0 w-[inherit]" type="search" placeholder="جستجو" id="search" />
            </div>
          </div>
        </div>`;
      });
      data.leftSide.map((Header2) => {
        document.querySelector(".header2").innerHTML += `
        <div class="icon-singup flex justify-center items-center grow-0 gap-3">
          <a href="#"><img class="bg-white lg:bg-none rounded-full lg:rounded-none p-1 lg:p-0 outline lg:outline-0 outline-[#dfdfdf] w-8 lg:w-6" src=${Header2.bell}  /></a>
          <div class="img-button hidden lg:flex grow shrink-0 px-4 py-1.25 justify-between
          items-center bg-white rounded-sm text-[12px] border-[1.5px] border-solid border-[#e0e0e2]">
            <img src=${Header2.enter}  />
            <button class="text-[12px] font-medium bg-white">${Header2.enterSpan}</button>
          </div>
          <span class="text-[#e0e0e2] text-[15px] hidden lg:flex">|</span>
          <a href="#"><img class="hidden lg:flex lg:w-6" src=${Header2.shopingCart}  /></a>
        </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getHeader2;
