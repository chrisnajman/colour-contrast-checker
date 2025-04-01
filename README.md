# Colour Contrast Checker

A simple and accessible web tool for checking the contrast between text and background colours based on the Web Content Accessibility Guidelines (WCAG). This tool helps ensure that colour combinations meet accessibility standards for readability.

## Features

- Two input methods: Choose colours via a colour picker or manually enter hex codes.
- Instant feedback: Displays WCAG compliance results, including contrast ratio and pass/fail status for AA and AAA standards.
- Live preview: See how normal and large text appears with selected colours.
- Keyboard and screen reader friendly: Fully navigable via keyboard and compatible with assistive technologies.
- Loading animation,
- theme switcher.

[View on GitPage](https://chrisnajman.github.io/colour-contrast-checker)

## How to Use

- Pick colours: Use the colour picker or enter hex codes manually.
- Check Results: Click the "Check" button to evaluate contrast.
- Review WCAG Data: See the contrast ratio and pass/fail results.
- Preview Text: View how text appears with chosen colours.

## JavaScript

Built with **vanilla ES6 JavaScript**, focusing on modern syntax and browser APIs.

The JavaScript has been split into separate modules, improving code modularity:

- `colour-pickers/colour-pickers.js`: Handles colour selection via input pickers and updates the UI accordingly.
- `print-hex.js`: Updates the displayed hex value as users select colours.
- `hex-inputs/hex-inputs.js`: Manages manual hex code input and triggers WCAG evaluation.
- `data/fetch-wcag-data.js`: Fetches contrast evaluation results from the [WebAIM API](https://webaim.org/resources/contrastchecker/).
- `data/display-wcag-data.js`: Updates the UI with WCAG contrast results.
- `paint-text-boxes.js`: Applies the selected colours to the preview text boxes for real-time visualization.

### Other

- `loader.js`: See [Loader Git repository](https://github.com/chrisnajman/loader)
- `theme.js`: Handles theme toggling (light/dark mode) and local storage management.

---

## Theme Toggling

The application includes a dark mode and light mode toggle:

- The current theme state is stored in **local storage** and applied automatically on page reload.
- Accessible buttons with appropriate ARIA attributes are used to improve usability.

---

## Accessibility

- Ensures focus moves to results after form submission.
- Provides visually hidden instructions for screen reader users.
- Uses semantic HTML elements and ARIA attributes.

The site is fully navigable using tab keys and up/down arrows.

---

## Testing and Compatibility

The application has been tested on the following platforms and browsers:

- **Operating System**: Windows 10
- **Browsers**:
  - Google Chrome
  - Mozilla Firefox
  - Microsoft Edge

### Device View Testing

The layout and functionality have been verified in both browser and device simulation views to ensure responsiveness and usability.

---

## How to Run

1. Clone or download the repository to your local machine.
2. Open the project folder and start a simple HTTP server (e.g., using `Live Server` in VS Code or Python's `http.server` module).
3. Open the project in a modern browser (e.g., Chrome, Firefox, or Edge).
