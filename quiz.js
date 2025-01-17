const checkAnswer = () => {
  const correctAnswer = "4";

  const checkOptionSelected = document.querySelector(
    'input[name="quiz"]:checked'
  );
  const feedback = document.getElementById("feedback");

  if (!checkOptionSelected) {
    feedback.textContent = "Please select the answer before submitting";
    feedback.style.color = "pink";
    console.log(checkOptionSelected);
    return;
  }

  const userAnswer = checkOptionSelected.value;

  if (userAnswer === correctAnswer) {
    feedback.textContent = "Correct! Well done.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "That's incorrect. Try again!";
    feedback.style.color = "red";
  }
};
console.log(checkAnswer);

const submitAnswer = document.getElementById("submit-answer");

submitAnswer.addEventListener("click", checkAnswer);
