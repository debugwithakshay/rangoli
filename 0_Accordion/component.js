let accordion__item = document.querySelectorAll(".accordion__item")

accordion__item.forEach(function(item){
    let status = "close"
    item.addEventListener("click", function(){
        if(status == "close" && !this.classList.contains("accordion__item--disabled")){
            this.children[0].children[1].style.transform = "rotate(180deg)";
            this.children[0].nextElementSibling.style.display = "inline-block"
            this.style.marginBottom = "10px"
            status = "open";
        }else if(status = "open"){
            this.children[0].children[1].style.transform = "rotate(0deg)";
            this.children[0].nextElementSibling.style.display = "none"
            this.style.marginBottom = "0px"
            status = "close";
        }
    })
})

