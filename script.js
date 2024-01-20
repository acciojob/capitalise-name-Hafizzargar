//your JS code here. If required.
var inputField = document.getElementById("fname");

    // Add a blur event listener to the input field
    inputField.addEventListener("blur", function () {
        // Convert the content to uppercase when the field loses focus
        inputField.value = inputField.value.toUpperCase();
    });
 