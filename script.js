const mainDiv = document.querySelector(".main-div");
const answers = [];
const resultObj = {
  Chianna: 0,
  Crichton: 0,
  Scorpy: 0,
  Dargo: 0,
  Rygel: 0,
  Scorpy: 0,
  Aeryn: 0
  };

const firstQuestion = `<div class="question1 intro"> <strong> Question 1 </strong> <br><br> You find yourself in a brand new place where you don't understand the local language. What do you do?<br><br>
<div>
<input class="q1" type="radio" name="question1" value="Crichton">
<label for="q1">Use as many obscure pop culture references as possible when talking to everyone.</label>
</div>

<div>
<input class="q1" type="radio" name="question1" value="Aeryn">
<label for="q1">Distrust everyone and always remain grumpy.</label>
</div>

<div>
<input class="q1" type="radio" name="question1" value="Scorpy">
<label for="q1">Slither your way into other people's good graces.</label>
</div>

<div>
<input class="q1" type="radio" name="question1" value="Chianna">
<label for="q1">Try and seduce as many of the locals as possible (or get banished for your efforts).</label>
</div>
</div>`;

const secondQuestion = `<div class="question2 intro"> <strong>Question 2</strong> <br><br> You haven't eaten in a long time and you are in the mood for a special treat. What do you go for?<br><br>
<div>
<input class="q2" type="radio" name="question2" value="Rygel">
<label for="q2">Marjools.</label>
</div>

<div>
<input class="q2" type="radio" name="question2" value="Crichton">
<label for="q2">Chocolate.</label>
</div>

<div>
<input class="q2" type="radio" name="question2" value="Chianna">
<label for="q2">Raslak and fellip nectar.</label>
</div>

<div>
<input class="q2" type="radio" name="question2" value="Aeryn">
<label for="q2">Tannot root.</label>
</div>
</div>`;

const thirdQuestion = `<div class="question3 intro"> <strong>Question 3</strong> <br><br> You're bored and looking for something fun to do. Where do you go?<br><br>
<div>
<input class="q3" type="radio" name="question3" value="Rygel">
<label for="q3">Take a very long double-nap.</label>
</div>

<div>
<input class="q3" type="radio" name="question3" value="Crichton">
<label for="q3">Wander through the corridors, singing and talking to yourself.</label>
</div>

<div>
<input class="q3" type="radio" name="question3" value="Chianna">
<label for="q3">Head off to the nearest party.</label>
</div>

<div>
<input class="q3" type="radio" name="question3" value="Dargo">
<label for="q3">Start a fight.</label>
</div>
</div>`;

const fourthQuestion = `<div class="question4 intro"> <strong>Question 4</strong> <br><br> You happen upon a large sum of unclaimed money. What do you do?<br><br>
<div>
<input class="q4" type="radio" name="question4" value="Rygel">
<label for="q4">Hoard all the money and tell no one.</label>
</div>

<div>
<input class="q4" type="radio" name="question4" value="Crichton">
<label for="q4">Try to convince all your friends to spend the money on something you need, while making them think it was their idea.</label>
</div>

<div>
<input class="q4" type="radio" name="question4" value="Aeryn">
<label for="q4">Money? You haven't dealt in anything as common as money in a long time.</label>
</div>

<div>
<input class="q4" type="radio" name="question4" value="Dargo">
<label for="q4">You don't care about money. You only care about fighting.</label>
</div>
</div>`;

const fifthQuestion = `<div class="question5 intro"> <strong>Question 5</strong> <br><br> How would others describe your atittude towards authority?<br><br>
<div>
<input class="q5" type="radio" name="question4" value="Rygel">
<label for="q5">Distrustful.</label>
</div>

<div>
<input class="q5" type="radio" name="question4" value="Aeryn">
<label for="q5">Indoctrinated.</label>
</div>

<div>
<input class="q5" type="radio" name="question4" value="Dargo">
<label for="q5">Aggressive.</label>
</div>

<div>
<input class="q5" type="radio" name="question4" value="Chianna">
<label for="q5">Perturbed.</label>
</div>
</div>`;

const sixthQuestion = `<div class="question6 intro"> <strong>Question 6</strong> <br><br> How do you tend to deal with difficult tasks?<br><br>
<div>
<input class="q6" type="radio" name="question4" value="Scorpy">
<label for="q6">You analyse the details and take your time formulating a solution.</label>
</div>

<div>
<input class="q6" type="radio" name="question4" value="Aeryn">
<label for="q6">You stick to what you know best - rules and procedures.</label>
</div>

<div>
<input class="q6" type="radio" name="question4" value="Dargo">
<label for="q6">With speed and precision.</label>
</div>

<div>
<input class="q6" type="radio" name="question4" value="Chianna">
<label for="q6">You seek advice from others and ignore all of it because you know better.</label>
</div>
</div>`;

const seventhQuestion = `<div class="question7 intro"> <strong>Question 7</strong> <br><br>You've just finished a long and exhausting day. What do you do to decompress and relax?<br><br>
<div>
<input class="q7" type="radio" name="question4" value="Crichton">
<label for="q7">Dance, wave your arms, run around and sing your favourite songs loudly.</label>
</div>

<div>
<input class="q7" type="radio" name="question4" value="Aeryn">
<label for="q7">Do some chores around the house.</label>
</div>

<div>
<input class="q7" type="radio" name="question4" value="Dargo">
<label for="q7">Complete a high-intensity session of exercise or strength training.</label>
</div>

<div>
<input class="q7" type="radio" name="question4" value="Chianna">
<label for="q7">Chat with your friends.</label>
</div>
</div>`;

const nextButton = document.querySelector("#select-question");
const submitButton = document.querySelector("#submit-answer");
const submitLabel = document.getElementById("submit-answer-label");
const introText = document.getElementById('intro-text');
const error = document.getElementById('error');
const characterCards = document.querySelectorAll('.image-description');

function showQuestion(questionNumber = 1) {
  if (questionNumber === 8) {
    submitButton.remove();
    nextButton.remove();
    answers.forEach(m => resultObj[m]++);
    const scores = Object.entries(resultObj).sort((a,b) => b[1] - a[1]);
    
    if (scores[0][1] !== scores [1][1]) {
      submitLabel.innerText += ` You are most like ${scores[0][0]}.`;
        characterCards.forEach(character => {
          if (character.id === scores[0][0]) {
            character.style.display = 'block';
          }
        });
       
      } else if (scores[0][1] === scores[1][1]) {
        submitLabel.innerText += ` You are most like ${scores[0][0]} and ${scores[1][0]}.`;
          characterCards.forEach(character => {
            if (character.id === scores[0][0] || character.id === scores[1][0]) {
              character.style.display = 'block';
            }
         });
      }
  }
  const questions = [
    firstQuestion,
    secondQuestion,
    thirdQuestion,
    fourthQuestion,
    fifthQuestion,
    sixthQuestion,
    seventhQuestion
  ];

  nextButton.addEventListener("click", () => {
    nextButton.style.display = 'none';
    submitLabel.style.display = 'none';
    introText.remove();
   
    if (questionNumber === 1) {
      nextButton.innerText = 'Next question';
    };
    submitButton.style.display = 'block';
    mainDiv.innerHTML = questions[questionNumber - 1];
    submitLabel.innerText = "";
   
  });

  submitButton.addEventListener("click", () => {
    if (submitButton.style.display !== 'none') {
      error.style.display = 'block';
    };
    const options = document.querySelectorAll(`.q${questionNumber}`);

    options.forEach(input => {
      if (input.checked) {
        nextButton.style.display = 'block';
        error.style.display = 'none';
        submitButton.style.display = 'none';
        answers.push(input.value);
     
        const message =
          questionNumber < 7
            ? `Answer submitted. Proceed to question ${questionNumber + 1}.`
            : 'Your results are in!';

        submitLabel.style.display = 'block';
        submitLabel.innerHTML = message;
        nextButton.innerText = "Next question.";
        document.querySelector(`.question${questionNumber}`).remove();
        questionNumber++;
        showQuestion(questionNumber);
      }
    });
    
  });
}

showQuestion();