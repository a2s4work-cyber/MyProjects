async function getFooter3() {
  try {
    let res = await fetch("http://localhost:3004/footer3");
    if (res.ok) {
      let data = await res.json();
      data.map((Footer3) => {
        document.querySelector(".footer-3").innerHTML += `
        <a class="flex flex-col items-center decoration-0 text-[#3f4064]" href="#">
        <img class="w-13.5" src=${Footer3.image} >
        <span>${Footer3.desc}</span>
      </a>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getFooter3;
