let textArea = document.querySelector("#text-area");
let targetText = document.querySelector("#target-text");

textArea.addEventListener("input", function () {
  let typedText = textArea.value;
  let targetTextArray = targetText.innerHTML.split("");
  let typedTextArray = typedText.split("");

  for (let i = 0; i < typedTextArray.length; i++) {
    if (typedTextArray[i] !== targetTextArray[i]) {
      // The user has made a mistake
    }
  }
});
