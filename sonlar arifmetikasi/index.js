function getAverage() {
  const firstNum = document.getElementById("firstNum");
  const secondNum = document.getElementById("secondNum");

  const result = document.getElementsByClassName("average");
  const average = 0;
  if (firstNum.value.length === 0 || secondNum.value.length === 0) {
    alert("Please enter a number");
  } else {
    average = (firstNum.value + secondNum.value) / 2;
    result.innerText = average;
    console.log(average);
  }
}
