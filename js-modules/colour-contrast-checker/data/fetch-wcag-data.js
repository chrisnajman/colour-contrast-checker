import displayWcagData from "./display-wcag-data.js"

export default async function fetchWcagData(API) {
  try {
    const response = await fetch(API)

    if (response.ok) {
      const wcagData = await response.json()

      displayWcagData(wcagData)
    } else {
      console.log("Something went wrong...")
    }
  } catch (error) {
    console.log(error)
  }
}
