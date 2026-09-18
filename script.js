const imagens = [
  "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1200",
  "https://images.unsplash.com/photo-1516820580870-3f66c730d990?q=80&w=1200",
  "https://images.unsplash.com/photo-1507838153414-b4b713384a76?q=80&w=1200"
];

let indice = 0;

const imagemCarrossel = document.getElementById("carrossel-img");

function nextSlide() {
  indice = (indice + 1) % imagens.length;
  imagemCarrossel.src = imagens[indice];
}

function prevSlide() {
  indice = (indice - 1 + imagens.length) % imagens.length;
  imagemCarrossel.src = imagens[indice];
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);

document.querySelectorAll(".scroll-comprar").forEach((botao) => {
  botao.addEventListener("click", () => {
    document.getElementById("comprar").scrollIntoView({
      behavior: "smooth"
    });
  });
});
