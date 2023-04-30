const images = ["0.jpg", "1.jpg", "2.jpeg", "3.jpg", "4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

//const bgImage = document.createElement("img");
//bgImage.src = `img/${chosenImage}`;
//document.body.appendChild(bgImage);

console.log(chosenImage);
const bg = document.querySelector("body");

bg.style.backgroundImage = `url('main/img/${chosenImage}')`;
bg.style.backgroundsize = `cover`;
