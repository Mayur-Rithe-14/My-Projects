let output = document.querySelector("#output");
let image = document.querySelector("#image");

let catBtn = document.querySelector("#catBtn");
let dogBtn = document.querySelector("#dogBtn");
let jokeBtn = document.querySelector("#jokeBtn");
let adviceBtn = document.querySelector("#adviceBtn");

catBtn.addEventListener("click", getCatFact);
dogBtn.addEventListener("click", getDogImage);
jokeBtn.addEventListener("click", getJoke);
adviceBtn.addEventListener("click", getAdvice);

// Cat Fact
async function getCatFact() {
  resetUI();
  output.innerText = "Loading...";
  try {
    let res = await axios.get("https://catfact.ninja/fact");
    output.innerText = res.data.fact;
  } catch (err) {
    output.innerText = "Error fetching cat fact!";
  }
}

// Dog Image
async function getDogImage() {
  resetUI();
  output.innerText = "Loading...";
  try {
    let res = await axios.get("https://dog.ceo/api/breeds/image/random");
    output.innerText = "";
    image.src = res.data.message;
  } catch (err) {
    output.innerText = "Error fetching dog image!";
  }
}

// Jokes
async function getJoke() {
  resetUI();
  output.innerText = "Loading...";
  try {
    let res = await axios.get(
      "https://official-joke-api.appspot.com/random_joke",
    );
    output.innerText = res.data.setup + " 🤣 " + res.data.punchline;
  } catch (err) {
    output.innerText = "Error fetching joke!";
  }
}

// Advice
async function getAdvice() {
  resetUI();
  output.innerText = "Loading...";
  try {
    let res = await axios.get("https://api.adviceslip.com/advice");
    output.innerText = res.data.slip.advice;
  } catch (err) {
    output.innerText = "Error fetching advice!";
  }
}

// Reset UI
function resetUI() {
  image.src = "";
}
