const mainDiv = document.querySelector(".main-div");
const answers = [];
const resultObj = {
  chianna: 0,
  crichton: 0,
  scorpy: 0,
  dargo: 0,
  rygel: 0,
  scorpy: 0,
  aeryn: 0
  };

const firstQuestion = `<div class="question1 intro"> <strong> Question 1 </strong> <br><br> You find yourself in a brand new place where you don't understand the local language. What do you do?<br><br>
<div>
<input class="q1" type="radio" name="question1" value="crichton">
<label for="q1">Use as many obscure pop culture references as possible when talking to everyone.</label>
</div>

<div>
<input class="q1" type="radio" name="question1" value="aeryn">
<label for="q1">Distrust everyone and always remain grumpy.</label>
</div>

<div>
<input class="q1" type="radio" name="question1" value="scorpy">
<label for="q1">Slither your way into other people's good graces.</label>
</div>

<div>
<input class="q1" type="radio" name="question1" value="chianna">
<label for="q1">Try and seduce as many of the locals as possible (or get banished for your efforts).</label>
</div>
</div>`;

const secondQuestion = `<div class="question2 intro"> <strong>Question 2</strong> <br><br> You haven't eaten in a long time and you are in the mood for a special treat. What do you go for?<br><br>
<div>
<input class="q2" type="radio" name="question2" value="rygel">
<label for="q2">Marjools.</label>
</div>

<div>
<input class="q2" type="radio" name="question2" value="crichton">
<label for="q2">Chocolate.</label>
</div>

<div>
<input class="q2" type="radio" name="question2" value="chianna">
<label for="q2">Raslak and fellip nectar.</label>
</div>

<div>
<input class="q2" type="radio" name="question2" value="aeryn">
<label for="q2">Tannot root.</label>
</div>
</div>`;

const thirdQuestion = `<div class="question3 intro"> <strong>Question 3</strong> <br><br> You're bored and looking for something fun to do. Where do you go?<br><br>
<div>
<input class="q3" type="radio" name="question3" value="rygel">
<label for="q3">Take a very long double-nap.</label>
</div>

<div>
<input class="q3" type="radio" name="question3" value="crichton">
<label for="q3">Wander through the corridors, singing and talking to yourself.</label>
</div>

<div>
<input class="q3" type="radio" name="question3" value="chianna">
<label for="q3">Head off to the nearest party.</label>
</div>

<div>
<input class="q3" type="radio" name="question3" value="dargo">
<label for="q3">Start a fight.</label>
</div>
</div>`;

const fourthQuestion = `<div class="question4 intro"> <strong>Question 4</strong> <br><br> You happen upon a large sum of unclaimed money. What do you do?<br><br>
<div>
<input class="q4" type="radio" name="question4" value="rygel">
<label for="q4">Hoard all the money and tell no one.</label>
</div>

<div>
<input class="q4" type="radio" name="question4" value="crichton">
<label for="q4">Try to convince all your friends to spend the money on something you need, while making them think it was their idea.</label>
</div>

<div>
<input class="q4" type="radio" name="question4" value="aeryn">
<label for="q4">Money? You haven't dealt in anything as common as money in a long time.</label>
</div>

<div>
<input class="q4" type="radio" name="question4" value="dargo">
<label for="q4">You don't care about money. You only care about fighting.</label>
</div>
</div>`;

const fifthQuestion = `<div class="question5"> <strong>Question 5</strong> <br><br> How would others describe your atittude towards authority?<br><br>
<div>
<input class="q5" type="radio" name="question4" value="rygel">
<label for="q5">Distrustful.</label>
</div>

<div>
<input class="q5" type="radio" name="question4" value="aeryn">
<label for="q5">Indoctrinated.</label>
</div>

<div>
<input class="q5" type="radio" name="question4" value="dargo">
<label for="q5">Aggressive.</label>
</div>

<div>
<input class="q5" type="radio" name="question4" value="chianna">
<label for="q5">Perturbed.</label>
</div>
</div>`;

const finishMsg = `<div class="question6"> And you're all done.</div>`;

const nextButton = document.querySelector("#select-question");
const submitButton = document.querySelector("#submit-answer");
const submitLabel = document.getElementById("submit-answer-label");
const introText = document.getElementById('intro-text');
const errorDiv = document.getElementById('error-div');

function showQuestion(questionNumber = 1) {
  if (questionNumber === 6) {
    mainDiv.innerHTML = finishMsg;
    submitButton.remove();
    nextButton.remove();

    answers.forEach(m => resultObj[m]++);
    const scores = Object.entries(resultObj).sort((a,b) => b[1] - a[1]);
    if (scores[0][1] !== scores [1][1]) {
       document.body.append(`<div class="red-box">You are most like ${scores[0][0]}</div>`);
    } else if (scores[0][1] === scores[1][1]) {
      document.body.append(`<div class="red-box">You are most like ${scores[0][0]} and ${scores[1][0]}</div>`);
    }
   console.log(scores);
    return;
  }
  const questions = [
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    fourthQuestion,
    fifthQuestion,
  ];
  nextButton.addEventListener("click", (event) => {
    nextButton.style.display = 'none';
    submitLabel.style.display = 'none';
    introText.remove();
   
    if (questionNumber === 1) {
      nextButton.innerText = 'Next question';
    }
    submitButton.style.display = 'block';
    mainDiv.innerHTML = questions[questionNumber - 1];
    submitLabel.innerText = "";
   
  });

  submitButton.addEventListener("click", (event) => {
    const options = document.querySelectorAll(`.q${questionNumber}`);
    options.forEach((input, i) => {
      if (input.checked) {
        errorDiv.innerHTML = '';
        nextButton.style.display = 'block';
        submitButton.style.display = 'none';
        answers.push(input.value);
     
        const message =
          questionNumber < 5
            ? `Answer submitted. Proceed to question ${questionNumber + 1}.`
            : "Click the button to see your results.";

        submitLabel.style.display = 'block';
        submitLabel.innerText = message;
        nextButton.innerText = "Next question.";
        document.querySelector(`.question${questionNumber}`).remove();
        questionNumber++;
       

        showQuestion(questionNumber);
      } else {
        errorDiv.innerHTML = '<p id="error" class="intro red-intro"> Please select an option</p>';
       // setTimeout(() => errorDiv.innerHTML = '', 4000)
      }
    });
    
  });
}

showQuestion();




