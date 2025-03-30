export default function paintTextBoxes(foreground, background) {
  const textBoxes = document.querySelectorAll("[data-text-box]")
  textBoxes.forEach((box) => {
    box.style = `color: ${foreground.value}; background-color: ${background.value};`
  })
}
