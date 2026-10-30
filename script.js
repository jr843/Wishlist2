const titulo = document.querySelector(".cabecalho h1");

titulo.addEventListener("click", () => {
    titulo.textContent =
        titulo.textContent === "Minha Wishlist 🎁"
            ? "Escolha seu presente! 🎄"
            : "Minha Wishlist 🎁";
});