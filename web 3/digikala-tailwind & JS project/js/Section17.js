async function getSection17() {
  try {
    let res = await fetch("http://localhost:3004/section17");
    if (res.ok) {
      let data = await res.json();
      data.header.map((section17) => {
        document.querySelector(".section17 .whole .title").innerHTML +=
          `<span class="article-header text-black">خواندنی‌ها</span>
            <div class="more flex justify-center items-center text-[#19bfd3]">
              <span>${section17.title}</span>
              <img class="w-4.5" src=${section17.image} >
            </div>`;
      });
      data.elem.map((section17) => {
        document.querySelector(".section17 .whole .items").innerHTML +=
          `<div class="item flex flex-col items-center border border-solid border-[#8080803d] rounded-lg">
              <a class="decoration-0" href="#">
                <img class="rounded-s-lg rounded-e-lg" src=${section17.image} >
                <span class="flex text-black text-[14px] font-normal px-4 mt-2 mb-3">${section17.desc}      
                </span>
              </a>
            </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection17;
