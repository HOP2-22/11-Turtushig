// Common English words list
const words = [
  "the",
  "of",
  "and",
  "a",
  "to",
  "in",
  "that",
  "it",
  "with",
  "as",
  "for",
  "was",
  "on",
  "are",
  "by",
  "be",
  "this",
  "at",
  "which",
  "but",
  "not",
  "or",
  "an",
  "each",
  "from",
  "has",
  "have",
  "had",
  "he",
  "she",
  "they",
  "you",
  "i",
  "your",
  "they're",
  "we",
  "us",
  "ours",
];

// Keep track of player's score
let score = 0;

// Keep track of total number of characters typed
let totalChars = 0;

// Keep track of number of correct characters typed
let correctChars = 0;

// Keep track of start time
let startTime;

// Get references to the HTML elements we'll be using
let wordEl = document.getElementById("word");
let nextWordsEl = document.getElementById("next-words");
let scoreEl = document.getElementById("score");
let inputEl = document.getElementById("input");
let wpmEl = document.getElementById("wpm");
let accuracyEl = document.getElementById("accuracy");

// Display the first word to be typed
let currentWord = words[Math.floor(Math.random() * words.length)];
wordEl.textContent = currentWord;

// Display the next 5 words to be typed
let nextWords = [];
for (let i = 0; i < 5; i++) {
  nextWords.push(words[Math.floor(Math.random() * words.length)]);
}
nextWordsEl.textContent = nextWords.join(", ");

// Listen for player's input
inputEl.addEventListener("input", function () {
  let value = inputEl.value;
  totalChars += value.length;
  if (value === currentWord) {
    score++;
    scoreEl.textContent = score;
    correctChars += value.length;
    inputEl.value = "";
    currentWord = nextWords.shift();
    wordEl.textContent = currentWord;
    nextWords.push(words[Math.floor(Math.random() * words.length)]);
    nextWordsEl.textContent = nextWords.join(", ");
    if (score === 1) {
      startTime = new Date();
    }
    let elapsedTime = (new Date() - startTime) / 1000;
    let wpm = Math.round((score / elapsedTime) * 60);
    wpmEl.textContent = wpm + " WPM";
    let accuracy = Math.round((correctChars / totalChars) * 100);
    accuracyEl.textContent = accuracy + "% Accuracy";
  }
});
