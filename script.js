let input = document.querySelector("#currency-amount");
let from = document.querySelector("#from-currency");
let tocurr = document.querySelector("#to-currency");
let btn = document.querySelector("#convert-currency");
let result = document.querySelector("#currency-result");

btn.addEventListener("click", currencyconverter);

from.addEventListener("change", () => {
    let selectedValue = from.value;
    let options = tocurr.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

   
    if (from.value === tocurr.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                tocurr.value = options[i].value;
                break;
            }
        }
    }
});

tocurr.addEventListener("change", () => {
    let selectedValue = tocurr.value;
    let options = from.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedValue) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (tocurr.value === from.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                from.value = options[i].value;
                break;
            }
        }
    }
});


function currencyconverter() {
    let value = input.value.trim();

    
    if (value === "") {
        result.innerText = "Please enter a value";
        return; 
    }
    if (from.value == "USD" && tocurr.value == "INR") {
        let res = input.value * 87.81;
        result.innerText = res.toFixed(2);
    } else if (from.value == "EUR" && tocurr.value == "INR") {
        let res = input.value * 101.28;
        result.innerText = res.toFixed(2);
    } else if (from.value == "INR" && tocurr.value == "USD") {
        let res = input.value * (1 / 87.81);
        result.innerText = res.toFixed(3);
    } else if (from.value == "INR" && tocurr.value == "EUR") {
        let res = input.value * (1 * 1 / 101.36);
        result.innerText = res.toFixed(3);
    } else if (from.value == "EUR" && tocurr.value == "USD") {
        let res = input.value * 1.09;
        result.innerText = res.toFixed(3);
    } else if (from.value == "USD" && tocurr.value == "EUR") {
        let res = input.value * (1 / 1.09);
        result.innerText = res.toFixed(3);
    } else {
        result.innerText = "Conversion not supported.";
    }
}






let inp2 = document.querySelector("#length-value");
let fromlen = document.querySelector("#from-length");
let tolen = document.querySelector("#to-length");
let btn2 = document.querySelector("#convert-length");
let res2 = document.querySelector("#length-result");


btn2.addEventListener("click", lengthconverter);

fromlen.addEventListener("change", () => {
    let selectedLength = fromlen.value;
    let options = tolen.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedLength) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

   
    if (fromlen.value === tolen.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                tolen.value = options[i].value;
                break;
            }
        }
    }
});

tolen.addEventListener("change", () => {
    let selectedLength = tolen.value;
    let options = fromlen.options;  // <- corrected here

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedLength) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (fromlen.value === tolen.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                fromlen.value = options[i].value;
                break;
            }
        }
    }
});


function lengthconverter() {
    let value = inp2.value.trim();

    
    if (value === "") {
        res2.innerText = "Please enter a value";
        return; 
    }
    if (fromlen.value == "km" && tolen.value == "m") {
        let ans = inp2.value * 1000;
        res2.innerText = ans.toFixed(2);
    } else if (fromlen.value == "km" && tolen.value == "cm") {
        let ans = inp2.value * 100000;
        res2.innerText = ans.toFixed(2);
    } else if (fromlen.value == "m" && tolen.value == "km") {
        let ans = inp2.value / 1000;
        res2.innerText = ans.toFixed(2);
    } else if (fromlen.value == "m" && tolen.value == "cm") {
        let ans = inp2.value * 100;
        res2.innerText = ans.toFixed(2);
    } else if (fromlen.value == "cm" && tolen.value == "km") {
        let ans = inp2.value / 100000;
        res2.innerText = ans.toFixed(2);
    } else if (fromlen.value == "cm" && tolen.value == "m") {
        let ans = inp2.value / 100;
        res2.innerText = ans.toFixed(2);
    } else {
        res2.innerText = "Conversion not supported";
    }
}


let inp3 = document.querySelector("#volume-value");
let fromvol = document.querySelector("#from-volume");
let tovol = document.querySelector("#to-volume");
let btn3 = document.querySelector("#convert-volume");
let res3 = document.querySelector("#volume-result");

btn3.addEventListener("click", volumeconverter);

fromvol.addEventListener("change", () => {
    let selectedVol = fromvol.value;
    let options = tovol.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedVol) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (fromvol.value === tovol.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                tovol.value = options[i].value;
                break;
            }
        }
    }
});

tovol.addEventListener("change", () => {
    let selectedVol = tovol.value;
    let options = fromvol.options;

    for (let i = 0; i < options.length; i++) {
        options[i].style.display = (options[i].value === selectedVol) ? "none" : "block";
    }

    if (fromvol.value === tovol.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                fromvol.value = options[i].value;
                break;
            }
        }
    }
});

function volumeconverter() {
    let value = inp3.value.trim();

    
    if (value === "") {
        res3.innerText = "Please enter a value";
        return; 
    }
    if (fromvol.value == "l" && tovol.value == "ml") {
        let ans1 = inp3.value * 1000;
        res3.innerText = ans1.toFixed(2);
    } else if (fromvol.value == "ml" && tovol.value == "l") {
        let ans1 = inp3.value / 1000;
        res3.innerText = ans1.toFixed(3);
    } 
    else {
        res3.innerText = "Conversion not supported.";
    }

}


let inp4 = document.querySelector("#weight-value");
let fromwei = document.querySelector("#from-weight");
let towei = document.querySelector("#to-weight");
let btn4 = document.querySelector("#convert-weight");
let res4 = document.querySelector("#weight-result");

btn4.addEventListener("click", weightconverter);
fromwei.addEventListener("change", () => {
    let selectedWeight = fromwei.value;
    let options = towei.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedWeight) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (fromwei.value === towei.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                towei.value = options[i].value;
                break;
            }
        }
    }
});
towei.addEventListener("change", () => {
    let selectedWeight = towei.value;
    let options = fromwei.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedWeight) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (towei.value === fromwei.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                fromwei.value = options[i].value;
                break;
            }
        }
    }
});


function weightconverter() {
    let value = inp4.value.trim();

    
    if (value === "") {
        res4.innerText = "Please enter a value";
        return; 
    }
    if (fromwei.value == "kg" && towei.value == "g") {
        let ans1 = inp4.value * 1000;
        res4.innerText = ans1.toFixed(2);
    } else if (fromwei.value == "g" && towei.value == "kg") {
        let ans1 = inp4.value / 1000;
        res4.innerText = ans1.toFixed(3);
    } 
    else {
        res4.innerText = "Conversion not supported";
    }

}

let inp5 = document.querySelector("#temp-value");
let fromtem = document.querySelector("#from-temp");
let totem = document.querySelector("#to-temp");
let btn5 = document.querySelector("#convert-temp");
let res5 = document.querySelector("#temp-result");


btn5.addEventListener("click", temperatureconverter);

fromtem.addEventListener("change", () => {
    let selectedTemp = fromtem.value;
    let options = totem.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedTemp) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (fromtem.value === totem.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                totem.value = options[i].value;
                break;
            }
        }
    }
});

totem.addEventListener("change", () => {
    let selectedTemp = totem.value;
    let options = fromtem.options;

    for (let i = 0; i < options.length; i++) {
        if (options[i].value === selectedTemp) {
            options[i].style.display = "none";
        } else {
            options[i].style.display = "block";
        }
    }

    if (totem.value === fromtem.value) {
        for (let i = 0; i < options.length; i++) {
            if (options[i].style.display !== "none") {
                fromtem.value = options[i].value;
                break;
            }
        }
    }
});



function temperatureconverter() {
  let value = inp5.value.trim();

    
    if (value === "") {
        res5.innerText = "Please enter a value";
        return; 
    }




    if (fromtem.value == "C" && totem.value == "F") {
        let ans = (inp5.value * 9 / 5) + 32;
        res5.innerText = ans.toFixed(2);
    } else if (fromtem.value == "F" && totem.value == "C") {
        let ans = (inp5.value - 32) * 5 / 9;
        res5.innerText = ans.toFixed(2);
    } else if (fromtem.value == "C" && totem.value == "K") {
        let ans = parseFloat(inp5.value) + 273.15;
        res5.innerText = ans.toFixed(2);
    } else if (fromtem.value == "K" && totem.value == "C") {
        let ans = inp5.value - 273.15;
        res5.innerText = ans.toFixed(2);
    } else if (fromtem.value == "F" && totem.value == "K") {
        let ans = ((inp5.value - 32) * 5 / 9) + 273.15;
        res5.innerText = ans.toFixed(2);
    } else if (fromtem.value == "K" && totem.value == "F") {
        let ans = ((inp5.value - 273.15) * 9 / 5) + 32;
        res5.innerText = ans.toFixed(2);
    } else {
        res5.innerText = "Comparison not supported";
    }
    }

