export default function printHex(region, regionHex) {
  region.addEventListener("input", () => {
    regionHex.textContent = region.value.toUpperCase()
  })
}
