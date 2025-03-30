/* output chart */
const ratio = document.getElementById("ratio")
const aa = document.getElementById("aa")
const aaLarge = document.getElementById("aa-large")
const aaa = document.getElementById("aaa")
const aaaLarge = document.getElementById("aaa-large")

export default function displayWcagData(wcagData) {
  ratio.textContent = wcagData.ratio
  aa.textContent = wcagData.AA
  aaLarge.textContent = wcagData.AALarge
  aaa.textContent = wcagData.AAA
  aaaLarge.textContent = wcagData.AAALarge
}
