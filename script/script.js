const divCards = document.getElementById("cards")
const cards = document.querySelector(".cards").children;
const listCards = [...cards];
const detalhes = document.querySelector(".detalhes")





function expandirDetalhes() {
    listCards.forEach(card => {
        card.addEventListener("click", () => {
            if (detalhes) {
                detalhes.classList.toggle("hidden")
                
            }
        })

    })
}


expandirDetalhes()
