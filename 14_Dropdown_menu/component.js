let dropDownBtn = document.querySelector(".drop-down-menu .drop-down-Btn");
let optionBox = document.querySelector(".drop-down-menu .drop-down-options");
let options = document.querySelectorAll(".drop-down-options option")

let condition = "close";
dropDownBtn.addEventListener("click", function () {
  if (condition == "close") {
    optionBox.style.display = "flex";
    condition = "open";
  } else if(condition == "open"){
    optionBox.style.display = "none";
    condition = "close";
  }
});

options.forEach(option => {
  option.addEventListener("click", function(){
    optionBox.style.display = "none";
    condition = "close";
  })
})