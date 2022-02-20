const showOnPx = 100;
const backToTopBtn = document.querySelector(".backToTop");

const scrollContainer=()=>{
    return document.documentElement || document.body;
}

document.addEventListener("scroll",()=>{
    if(scrollContainer().scrollTop > showOnPx){
        backToTopBtn.classList.remove("hidden")
    }else{
        backToTopBtn.classList.add("hidden")
    }
})

const goToTop = () =>{
    document.body.scrollIntoView
}

backToTopBtn.addEventListener("click",goToTop)

