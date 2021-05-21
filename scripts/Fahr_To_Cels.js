"use strict";

window.onload = function(){
    // Connect Celsius button (on Fahr_To Cels.html) to click event handler
    const celsiusTempBtn = document.getElementById("celsiusTempBtn");
    celsiusTempBtn.onclick = celsiusTempBtnClicked;
}



function celsiusTempBtnClicked(){
    // Get Fahrenheit temperature from <input> field
    const fahrenheitTempField = document.getElementById("fahrenheitNumber");
    let fahrenheitTemp = Number(fahrenheitTempField.value);
    let celsius = 5/9 * (fahrenheitTemp - 32);

    let celsiusResult = document.getElementById("celsiusResult");
    celsiusResult.value = celsius;

}
