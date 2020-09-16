const calcScreen = document.querySelector('.answer');
// Cache
let cachebag = ''

// Typing function, 
document.querySelector(".numbers").addEventListener("click", function (event) {
 if (calcScreen.innerText==='0'){
    calcScreen.innerText = '';
  };
  calcScreen.innerText += event.target.innerText;
});

//Backspace function
document.querySelector(".backspace").addEventListener("click", function (event) {
  if (calcScreen.innerText != 0) {
    calcScreen.innerText = calcScreen.innerText.substr(0, calcScreen.innerText.length-1)
  }
  if (calcScreen.innerText ==="") {
    calcScreen.innerText = '0'
  }
})

// function that changes screen to zero
function zero() {
  calcScreen.innerText = "0";
};


// clear key function
const clear = document.querySelector('.clear');
clear.addEventListener('click', function () {
  zero();
  cachebag = '';
});

//addition
document.querySelector(".add").addEventListener("click", function (event) {
  if (calcScreen.innerText != 0) { 
  cachebag += `${calcScreen.innerText}+`;
    zero()
  }
})

//subtraction
document.querySelector(".subtract").addEventListener("click", function (event) {
  if (calcScreen.innerText != 0) { 
  cachebag += `${calcScreen.innerText}-`;
    zero()
  }
})

//multiplication
document.querySelector(".multiply").addEventListener("click", function (event) {
  if (calcScreen.innerText != 0) { 
  cachebag += `${calcScreen.innerText}*`;
    zero()
  }
})

//division
document.querySelector(".divide").addEventListener("click", function (event) {
  if (calcScreen.innerText != 0) { 
  cachebag += `${calcScreen.innerText}/`;
    zero()
  }
})

//Equal
document.querySelector(".equals").addEventListener("click", function (event) {
  if (cachebag != '') {
    cachebag += calcScreen.innerText
    calcScreen.innerText = eval(cachebag)
    cachebag = ''
  }
})
