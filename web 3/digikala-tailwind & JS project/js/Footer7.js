async function getFooter7() {
  try {
    let res = await fetch("http://localhost:3004/footer7");
    if (res.ok) {
      let data = await res.json();
      data.map((Footer7) => {
        document.querySelector(".footer-7").innerHTML += `
        <span class="text-center w-full font-[14px] text-[#81858b] py-8">${Footer7.desc}</span>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getFooter7;
