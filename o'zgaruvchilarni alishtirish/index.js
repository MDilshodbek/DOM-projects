// function replaceVar() {
//   let firstInput = document.getElementById("birinchi");
//   let secondInput = document.getElementById("ikkinchi");
//   let New_data = document.querySelector(".new_data");

//   const message = `Sizning to'liq ismingiz: ${firstInput.value}, ${secondInput.value}`;
//   New_data.innerText = message;
//   console.log(message);
// }

function replaceVar() {
  let firstInput = document.getElementById("birinchi");
  let secondInput = document.getElementById("ikkinchi");
  let new_data = document.querySelector(".new_data");

  let firstrep = secondInput.value;
  let secondrep = firstInput.value;

  const message = `Sizning to'liq ismingiz: ${firstrep}, ${secondrep}`;
  new_data.innerText = message;
  console.log(message);
}
