async function getSection11() {
  try {
    let res = await fetch("http://localhost:3004/section9&section11");
    if (res.ok) {
      let data = await res.json();
      data.map((section11) => {
        document.querySelector(".section11").innerHTML +=
          `<div class="whole w-[98%] lg:w-[70%] flex lg:flex-row flex-col justify-center gap-5">
          <div><a href="#" class="flex justify-center"><img class="rounded-2xl" src=${section11.image1} ></a></div>
          <div><a href="#" class="flex justify-center"><img class="rounded-2xl" src=${section11.image2} ></a></div>
        </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getSection11;
