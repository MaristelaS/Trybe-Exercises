window.onload = function () {
  let select = document.querySelector("select");
  select.addEventListener("change", function () {
    let selected = select.selectedOptions[0];
    document.body.style.backgroundColor = selected.value;

    localStorage.setItem('background-color', selected.value);
  });


  let inputFontSize = document.querySelector('input[name="font-size"]');
  inputFontSize.addEventListener("change", function () {
    document.querySelector("p").style.fontSize = (inputFontSize.value) + "px";

    localStorage.setItem('font-size', (inputFontSize.value) +'px');
  });


  let savedBackground = localStorage.getItem('background-color');
  document.body.style.backgroundColor = savedBackground;

  let savedFontSize = localStorage.getItem('font-size');
  document.querySelector("p").style.fontSize = savedFontSize;
};
