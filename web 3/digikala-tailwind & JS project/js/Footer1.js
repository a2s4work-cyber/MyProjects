async function getFooter1() {
  try {
    let res = await fetch("http://localhost:3004/footer1");
    if (res.ok) {
      let data = await res.json();
      data.map((Footer1) => {
        document.querySelector(".footer-1").innerHTML += `
        <img class="hidden lg:flex w-48.75 h-7.5" src=${Footer1.image1} >
      <a class="hidden lg:flex justify-center gap-0.5 items-center decoration-0 text-[#424750] lg:text-[#a1a3a8] lg:text-[15px] text-[10px] lg:border border-solid border-[#80808067] rounded-full lg:rounded-lg py-2 px-4 bg-[#f2f2f2] lg:bg-white" href="#">${Footer1.desc1}<img class="w-4 lg:w-6" src="./img/pointer-up.svg" ></a>
      <a class="flex lg:hidden justify-center gap-1 items-center decoration-0 text-[#424750] lg:text-[#a1a3a8] lg:text-[15px] text-[10px] lg:border border-solid border-[#80808067] rounded-full lg:rounded-lg py-2 px-4 bg-[#f2f2f2] lg:bg-white font-bold" href="#">${Footer1.desc2}<img class="w-4 lg:w-6" src=${Footer1.image2} ></a>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getFooter1;
