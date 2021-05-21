"use strict";

window.onload = function(){
    // Connect Fahrenheit button (on Cels_To_Fahr.html) to click event handler
    const fahrenheitTempBtn = document.getElementById("fahrenheitTempBtn");
    fahrenheitTempBtn.onclick = fahrenheitTempBtnClicked;   
}

function fahrenheitTempBtnClicked(){
    // Get Celsius temperature from <input> field
    const celsiusTempField = document.getElementById("celsiusNumber");
    let celsiusTemp = Number(celsiusTempField.value);
    let fahrenheit = (celsiusTemp * 9/5) + 32;

    let fahrenheitResult = document.getElementById("fahrenheitResult");
    fahrenheitResult.value = fahrenheit;
}
