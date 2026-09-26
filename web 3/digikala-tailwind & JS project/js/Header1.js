async function getHeader1() {
  try {
    let res = await fetch("http://localhost:3004/header1");
    if (res.ok) {
      let data = await res.json();
      data.map((header1) => {
        document.querySelector(".header1").innerHTML += `
        <a href="#"><img class="w-full h-auto" src=${header1.image}  /></a>
        `;
      });
    } else {
      throw new Error(res.status);
    }
  } catch (error) {
    console.log(error);
  }
}
export default getHeader1;
