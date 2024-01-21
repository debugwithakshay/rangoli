let drawer = document.querySelector(".drawer")
let closeDrawer = document.querySelector(".drawer .icon--arrow-left")
let openDrawer = document.querySelector(".open-drawer-btn")

closeDrawer.addEventListener("click", function(){
  drawer.style.transform = "translateX(-30rem)"
})

openDrawer.addEventListener("click", function(){
  drawer.style.transform = "translateX(30rem)"
})