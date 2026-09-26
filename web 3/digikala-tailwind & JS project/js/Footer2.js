async function getFooter2() {
  try {
    let res = await fetch("http://localhost:3004/footer2");
    if (res.ok) {
      let data = await res.json();
      data.map((Footer2) => {
        document.querySelector(".footer-2").innerHTML +=
          `<span>${Footer2.desc1}</span>
      <span class="divider text-[12px] text-gray-600 font-medium">${Footer2.desc2}</span>
      <span>${Footer2.desc3}</span>
      <span class="divider text-[12px] text-gray-600 font-medium">${Footer2.desc4}</span>
      <span>${Footer2.desc5}</span>`;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getFooter2;
