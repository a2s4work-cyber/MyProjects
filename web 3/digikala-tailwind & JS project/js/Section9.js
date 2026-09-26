async function getSection9() {
  try {
    let res = await fetch("http://localhost:3004/section9&section11");
    if (res.ok) {
      let data = await res.json();
      data.map((section9) => {
        document.querySelector(".section9").innerHTML +=
          `<div class="whole w-[98%] lg:w-[70%] flex justify-center lg:gap-5">
          <div><a href="#" class="hidden lg:flex"><img class="rounded-2xl" src=${section9.image1} ></a></div>
          <div><a href="#"><img class="rounded-2xl" src=${section9.image2} ></a></div>
        </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection9;
