const collection = document.forms;
const area = document.querySelector("#area");
const width = document.querySelector("#width");
const materialCost = document.querySelector("#materialCost");
const seeds = document.querySelector("#seeds");
const fertilizerCost = document.querySelector("#fertilizerCost");
const fertilizer = document.querySelector("#fertilizer");
const consumption = document.querySelector("#consumption");
const costFuel = document.querySelector("#costFuel");

function Calculate() {}

area.addEventListener("input", function () {
  let areaVal = area.value;
  let root = Math.sqrt(areaVal);
  console.log(root);
});

// let root = Math.sqrt((areaVal * 10000) / widthVal);
// console.log(root);
