const animals = ["BIRD", "ZEBRA", "DINOSAUR", "HYENA", "MANTIS", "SHARK"];
const countries = ["BRAZIL", "MEXICO", "PERU", "USA", "GERMANY"];
const movies = ["JUNO", "UP", "FIGHTCLUB", "FARGO"];
let answer = "";
let clue = document.querySelector(".clue-container p");
let answerDisplay = document.querySelector(".answer-container p");
let keys = document.querySelectorAll("#btn");
let loosingImg = document.querySelector("img");
let guessesDisplay = document.querySelector(".guesses-container p");
let keyboardContainer = document.querySelector(".keyboard-container");
let chances = 0;
const maxChances = 6;
let correctAnswer = [];
let splitAnswer;
let index;
let blankAnswer = [];
let resetBtn = document.querySelector(".resetbtn-container button");
let useless = [];
let catergoryBtns = document.querySelectorAll(".category-container button");
let clueConainer = document.querySelector(".clue-container");

for (let i = 0; i < catergoryBtns.length; i++) {
  catergoryBtns[i].addEventListener("click", () => {
    guessesDisplay.style.color = "mistyrose";
    if (catergoryBtns[i].innerText === "+++animals+++") {
      answer = animals[Math.floor(Math.random() * animals.length)];
      catergoryBtns[i].style.backgroundColor = "black";
      catergoryBtns[i].style.color = "mistyrose";
      console.log(answer);
    } else if (catergoryBtns[i].innerText === "+++countries+++") {
      answer = countries[Math.floor(Math.random() * countries.length)];
      catergoryBtns[i].style.backgroundColor = "black";
      catergoryBtns[i].style.color = "mistyrose";
      console.log(answer);
    } else if (catergoryBtns[i].innerText === "+++movies+++") {
      answer = movies[Math.floor(Math.random() * movies.length)];
      catergoryBtns[i].style.backgroundColor = "black";
      catergoryBtns[i].style.color = "mistyrose";
      console.log(answer);
    }
    initializer();
  });
}

function initializer() {
  guessesDisplay.innerText = "Wrong guesses: 0 out of 6";
  answerDisplay.innerText = `${answer.length} letters.`;
  splitAnswer = answer.split("");
  blankAnswer = new Array(answer.length);
  answerDisplay.setAttribute("id", "style-answer");
  clueConainer.removeAttribute("id");
  if (answer === animals[0]) {
    clue.innerText = "Clue : It flies";
  } else if (answer === animals[1]) {
    clue.innerText = "Clue : It has stripes";
  } else if (answer === animals[2]) {
    clue.innerText = "Clue : It is extinct";
  } else if (answer === animals[3]) {
    clue.innerText = "Clue : It laughs a lot";
  } else if (answer === animals[4]) {
    clue.innerText = "Clue : It looks like they perfom martial arts";
  } else if (answer === animals[5]) {
    clue.innerText = "Clue : It terrorized the audiences in the 80's";
  }
  if (answer === countries[0]) {
    clue.innerText = "There they speak Portuguese";
  } else if (answer === countries[1]) {
    clue.innerText = "There they spend Pesos";
  } else if (answer === countries[2]) {
    clue.innerText = "There they spend Soles";
  } else if (answer === countries[3]) {
    clue.innerText = "There they just got rid of Trump";
  } else if (answer === countries[4]) {
    clue.innerText = "There they drink hot wine";
  }
  if (answer === movies[0]) {
    clue.innerText = "It happens in Alaska";
  } else if (answer === movies[1]) {
    clue.innerText = "It happens in the sky";
  } else if (answer === movies[2]) {
    clue.innerText = "They are not affraid of physical pain";
  } else if (answer === movies[3]) {
    clue.innerText = "It happens in Minnesota";
  }
}

function resetGame() {
  answer = "";
  initializer();
  guessesDisplay.innerText = "Choose a category";
  loosingImg.setAttribute("src", "images/0.jpg");
  keyboardContainer.removeAttribute("id", "hide");
  chances = 0;
  answerDisplay.innerText = "Secret Answer";
  clueConainer.setAttribute("id", "hide");
  for (let i = 0; i < catergoryBtns.length; i++) {
    catergoryBtns[i].style.backgroundColor = "mistyrose";
    catergoryBtns[i].style.color = "black";
  }
  for (let i = 0; i < keys.length; i++) {
    keys[i].style.cursor = "help";
    keys[i].style.backgroundColor = "mistyrose";
    keys[i].style.color = "black";
    correctAnswer = [];
  }
}

for (let i = 0; i < keys.length; i++) {
  keys[i].addEventListener("click", () => {
    if (answer === "") {
      guessesDisplay.style.color = "red";
    } else if (answer.includes(keys[i].innerText)) {
      keys[i].style.cursor = "not-allowed";
      keys[i].style.backgroundColor = "black";
      keys[i].style.color = "gray";
      index = splitAnswer.indexOf(keys[i].innerText);
      blankAnswer[index] = keys[i].innerText;
      answerDisplay.innerText = blankAnswer.join(".");
      if (correctAnswer.includes(keys[i].innerText)) {
        useless.push(keys[i].innerText);
      } else {
        correctAnswer.push(keys[i].innerText);
      }
      if (correctAnswer.length === answer.length) {
        guessesDisplay.innerText = "You Won!";
        keyboardContainer.setAttribute("id", "hide");
      }
    } else {
      chances += 1;
      keys[i].style.cursor = "not-allowed";
      keys[i].style.backgroundColor = "black";
      keys[i].style.color = "gray";
      if (chances === 1) {
        loosingImg.setAttribute("src", "images/1.jpg");
        guessesDisplay.innerText = "Wrong guesses: 1 out of 6";
      } else if (chances === 2) {
        loosingImg.setAttribute("src", "images/2.jpg");
        guessesDisplay.innerText = "Wrong guesses: 2 out of 6";
      } else if (chances === 3) {
        loosingImg.setAttribute("src", "images/3.jpg");
        guessesDisplay.innerText = "Wrong guesses: 3 out of 6";
      } else if (chances === 4) {
        loosingImg.setAttribute("src", "images/4.jpg");
        guessesDisplay.innerText = "Wrong guesses: 4 out of 6";
      } else if (chances === 5) {
        loosingImg.setAttribute("src", "images/5.jpg");
        guessesDisplay.innerText = "Wrong guesses: 5 out of 6";
      } else if (chances === maxChances) {
        loosingImg.setAttribute("src", "images/6.jpg");
        guessesDisplay.innerText = "You lost";
        keyboardContainer.setAttribute("id", "hide");
      }
    }
  });
}

resetBtn.addEventListener("click", () => {
  resetGame();
});
