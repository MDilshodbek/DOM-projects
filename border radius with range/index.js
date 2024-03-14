const rangeLeft = document.getElementById("rangeLeft");
const numberLeft = document.getElementById("numberLeft");

// Update the number input when the range input changes
rangeLeft.addEventListener("input", function () {
  numberLeft.value = this.value;
});

const rangeTop = document.getElementById("rangeTop");
const numberTop = document.getElementById("numberTop");

// Update the number input when the range input changes
rangeTop.addEventListener("input", function () {
  numberTop.value = this.value;
});

const rangeRight = document.getElementById("rangeRight");
const numberRight = document.getElementById("numberRight");

// Update the number input when the range input changes
rangeRight.addEventListener("input", function () {
  numberRight.value = this.value;
});

const rangeBottom = document.getElementById("rangeBottom");
const numberBottom = document.getElementById("numberBottom");

// Update the number input when the range input changes
rangeBottom.addEventListener("input", function () {
  numberBottom.value = this.value;
});
