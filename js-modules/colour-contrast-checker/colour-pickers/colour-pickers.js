import fetchWcagData from "../data/fetch-wcag-data.js"
import printHex from "./print-hex.js"
import paintTextBoxes from "../paint-text-boxes.js"

export default function colourPickers() {
  // Get elements
  const colourPickers = document.getElementById("colour-pickers")
  const foreground = document.getElementById("foreground")
  const background = document.getElementById("background")

  const foregroundHex = document.getElementById("foregroundHex")
  const backgroundHex = document.getElementById("backgroundHex")

  //  Ensure hex values are displayed immediately on page load
  foregroundHex.textContent = foreground.value.toUpperCase()
  backgroundHex.textContent = background.value.toUpperCase()

  printHex(foreground, foregroundHex)
  printHex(background, backgroundHex)

  colourPickers.addEventListener("submit", async (e) => {
    e.preventDefault()

    const colourForeground = foreground.value.replace("#", "")
    const colourBackground = background.value.replace("#", "")

    const API = `https://webaim.org/resources/contrastchecker/?fcolor=${colourForeground}&bcolor=${colourBackground}&api`
    console.log(API)

    fetchWcagData(API)

    paintTextBoxes(foreground, background)

    // Focus on chart and text box for screenreaders, after form submission
    document.getElementById("output").focus({ preventScroll: true })
  })
}
