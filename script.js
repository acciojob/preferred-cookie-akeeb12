const fontSizeInput = document.getElementById("fontsize");
const fontColorInput = document.getElementById("fontcolor");
const saveButton = document.getElementById("saveButton");

function savePreferences() {
  const fontSize = fontSizeInput.value;
  const fontColor = fontColorInput.value;

  // Store preferences in cookies
  document.cookie = `fontsize=${fontSize}; expires=; path=/`;
  document.cookie = `fontcolor=${fontColor}; expires=; path=/`;

  // Apply the new styles immediately
  document.body.style.fontSize = fontSize + "px";
  document.body.style.color = fontColor;
}

// Load saved preferences on page load
window.onload = () => {
  const cookies = document.cookie.split(';');

  for (let cookie of cookies) {
    const [name, value] = cookie.trim().split('=');

    if (name === 'fontsize') {
      fontSizeInput.value = value;
      document.body.style.fontSize = value + "px";
    } else if (name === 'fontcolor') {
      fontColorInput.value = value;
      document.body.style.color = value;
    }
  }
};

saveButton.addEventListener("click", savePreferences);