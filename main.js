const score1 = document.querySelector("#score1");
const score2 = document.querySelector("#score2");
const score3 = document.querySelector("#score3");
const score4 = document.querySelector("#score4");
const score5 = document.querySelector("#score5");
const submitBtn = document.querySelector(".submit-btn");
const resetBtn = document.querySelector(".reset-btn");
const choosedScore = document.querySelector(".choosed-score");
const thankyouComponent = document.querySelector(".thankyou-state-component");
const ratingComponent = document.querySelector(".rating-state-component");

function handleScore1() {
  choosedScore.innerHTML = "1";
}
function handleScore2() {
  choosedScore.innerHTML = "2";
}
function handleScore3() {
  choosedScore.innerHTML = "3";
}
function handleScore4() {
  choosedScore.innerHTML = "4";
}
function handleScore5() {
  choosedScore.innerHTML = "5";
}

function handleSubmit() {
  thankyouComponent.classList.toggle("hidden");
  return ratingComponent.classList.toggle("hidden");
}

score1.addEventListener("click", handleScore1);
score2.addEventListener("click", handleScore2);
score3.addEventListener("click", handleScore3);
score4.addEventListener("click", handleScore4);
score5.addEventListener("click", handleScore5);
submitBtn.addEventListener("click", handleSubmit);
resetBtn.addEventListener("click", handleSubmit);
