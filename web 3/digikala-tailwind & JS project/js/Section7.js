async function getSection7() {
  try {
    let res = await fetch("http://localhost:3004/section7");
    if (res.ok) {
      let data = await res.json();
      data.map((section7) => {
        document.querySelector(".section7 .box").innerHTML += `
         <div class="lg:flex flex lg:flex-row flex-col gap-2">
          <div class="lg:w-full">
            <a href="#">
              <img class="lg:rounded-2xl rounded-3xl w-115 h-29 lg:w-full lg:h-full border border-solid border-[#0C0C0C12] object-cover " src=${section7.image1} >
            </a>
          </div>
          <div class="lg:w-full">
            <a href="#">
              <img class="lg:rounded-2xl rounded-3xl w-115 h-29 lg:w-full lg:h-full border border-solid border-[#0C0C0C12] object-cover" src=${section7.image2} >
            </a>
          </div>
         </div>
         <div class="lg:flex flex lg:flex-row flex-col gap-2">
          <div class="lg:w-full">
            <a href="#">
              <img class="lg:rounded-2xl rounded-3xl w-115 h-29 lg:w-full lg:h-full border border-solid border-[#0C0C0C12] object-cover" src=${section7.image3} >
            </a>
          </div>
          <div class="lg:w-full">
            <a href="#">
            <img class="lg:rounded-2xl rounded-3xl w-115 h-29 lg:w-full lg:h-full border border-solid border-[#0C0C0C12] object-cover" src=${section7.image4} >
          </a>
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
export default getSection7;
