

//Mobile Navigation Toggle

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


const filterBtn = document.querySelectorAll(".filter-btn button");
const filterableCards = document.querySelectorAll(".filterable-cards .art-card");

console.log(filterBtn, filterableCards);

// define the filterCards function

const filterCards = e => {
    document.querySelector(".filter-btn .active")?.classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    // Iternate over each filterable card

    filterableCards.forEach(card => {
        //Add "hide" class to hide the card initially
        card.classList.add("hide");
        //check if the card matches the selected filter or "all" is selected

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

filterBtn.forEach(button => button.addEventListener('click', filterCards));


const backToTop = document.querySelector(".back-to-top");
window.addEventListener("scroll", () => {
    if(window.scrollY > 400){
        backToTop.classList.add("show");
    } else{
        backToTop.classList.remove("show");
    }
})



