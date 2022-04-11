const toggleButton = document.getElementsByClassName("toggleButton")[0];
const navbarLinks = document.getElementsByClassName("navbarLinks")[0];
const divCards = document.getElementById("cards")
const cards = document.querySelector(".cards").children;
const listCards = [...cards];
const detalhes = document.querySelector(".detalhes")

toggleButton.addEventListener("click", () => {
    navbarLinks.classList.toggle('active')
})



function expandirDetalhes() {
    listCards.forEach(card => {
        card.addEventListener("click", () => {
            if (detalhes) {
                detalhes.classList.toggle("hidden")
                console.log(card)
            }
        })

    })
}

expandirDetalhes()


const galeria = document.querySelector('.main-gallery')
var flickty = new Flickity(galeria,{
    contain: true,
    autoPlay: true
})