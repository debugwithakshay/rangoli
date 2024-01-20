let checkBox = document.querySelector(".checkBox");
let iconCheck = document.querySelector(".checkBox .icon--check");

checkBox.addEventListener("click", function () {
  if (checkBox.classList.contains("checked")) {
    checkBox.classList.replace("checked", "unchecked");
    iconCheck.style.display = "none";
  } else if (checkBox.classList.contains("unchecked")) {
    checkBox.classList.replace("unchecked", "checked");
    iconCheck.style.display = "inline";
  }
});
