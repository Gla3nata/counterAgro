const area = document.querySelector("#area");
const width = document.querySelector("#width");
const materialCost = document.querySelector("#materialCost");
const seeds = document.querySelector("#seeds");
const fertilizerCost = document.querySelector("#fertilizerCost");
const fertilizer = document.querySelector("#fertilizer");
const consumption = document.querySelector("#consumption");
const costFuel = document.querySelector("#costFuel");
const manual = document.querySelector("#manual");
const RTK = document.querySelector("#RTK");
const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const result4 = document.querySelector("#result4");
const result5 = document.querySelector("#result5");
const result6 = document.querySelector("#result6");
const calculation = document.querySelector("#calculation");

let widthVal = width.value;
let areaVal = area.value;

function calculate() {
  calculation.style.display = "block";
  let time = Math.sqrt(parseInt(area.value) * 10000);
  res1 = time / parseInt(width.value);
  result1.innerHTML = Math.round(res1);

  let accuracy = (parseInt(manual.value) - parseInt(RTK.value)) / 100;
  res2 = time / (parseInt(width.value) - accuracy);
  result2.innerHTML = Math.round(res2);

  res3 = time * (parseInt(width.value) * 0.0001) * (res2 - res1);
  result3.innerHTML = Math.round(res3);

  result4.innerHTML = Math.round(
    res3 * parseInt(seeds.value) * parseInt(materialCost.value)
  );
  result5.innerHTML = Math.round(
    res3 * parseInt(fertilizer.value) * parseInt(fertilizerCost.value)
  );
  result6.innerHTML = Math.round(
    res3 * parseInt(costFuel.value) * parseInt(consumption.value)
  );
}

const form = document.querySelector("form");
const formSubmit = document.querySelector("button");

form.addEventListener("change", changeFormHandler);

function changeFormHandler() {
  console.log(form.checkValidity());
  if (form.checkValidity()) {
    formSubmit.removeAttribute("disabled");
  }
}
