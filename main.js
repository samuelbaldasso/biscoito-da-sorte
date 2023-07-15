const array = [
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
  "O aprendizado é como o horizonte: não há limites.",
  "Fracassar não é cair, é recusar-se a levantar.",
  "O passado é história; o futuro, um mistério; e o presente, uma dádiva.",
];

const container = document.querySelector(".container");
const container2 = document.querySelector(".container2");
const containerImg = document.querySelector(".container img");
const fortune = document.querySelector(".fortune")
const button = document.querySelector("button");

containerImg.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * array.length);
  container.classList.add("hide"); 
  container2.classList.remove("hide");
  let phrase = array[randomIndex];
  fortune.innerHTML = phrase;
})

button.addEventListener("click", (e) => {
  e.preventDefault();
  container.classList.remove("hide"); 
  container2.classList.add("hide");
})

