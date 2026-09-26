async function getFooter5() {
  try {
    let res = await fetch("http://localhost:3004/footer5");
    if (res.ok) {
      let data = await res.json();
      data.map((Footer5) => {
        document.querySelector(".footer-5").innerHTML += `
        <div class="right flex justify-center items-center gap-3.75">
        <img class="max-w-11" src=${Footer5.image1} >
        <h1 class="text-[21px] font-medium text-white">${Footer5.desc}</h1>
      </div>
      <div class="left flex justify-center items-center gap-3.75 rounded-[5px]">
        <img class="bg-white rounded-[5px] max-w-35.5 max-h-11" src=${Footer5.image2}>
        <img class="bg-white rounded-[5px] max-w-35.5 max-h-11" src=${Footer5.image3} >
        <img class="bg-white rounded-[5px] max-w-35.5 max-h-11" src=${Footer5.image4} >
        <img class="more bg-white rounded-[5px] w-10.5" src=${Footer5.image5}  >
      </div>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getFooter5;
