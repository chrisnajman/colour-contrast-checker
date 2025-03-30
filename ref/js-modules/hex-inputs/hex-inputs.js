import fetchWcagData from "../data/fetch-wcag-data.js"
import paintTextBoxes from "../paint-text-boxes.js"

export default function hexInputs() {
  const hexInputs = document.getElementById("hex-inputs")
  const foreground = document.getElementById("foreground2")
  const background = document.getElementById("background2")

  hexInputs.addEventListener("submit", async (e) => {
    e.preventDefault()

    console.log(foreground.value)
    console.log(background.value)

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
