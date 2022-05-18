const questions = [

{
  "question": "What is not the common symbol for asexual?",
  "answer1": "Ace",
  "answer1Total": "0",
  "answer2": "Black-grey-white-purple Flag",
  "answer2Total": "0",
  "answer3": "Cake",
  "answer3Total": "0",
  "answer4": "Teddy Bear",
  "answer4Total": "1",
},

{
  "question": "According to general statistics (global studies), almost what percentage of global population is asexual?",
  "answer1": "1.0%",
  "answer1Total": "1",
  "answer2": "2.5%",
  "answer2Total": "0",
  "answer3": "0.4%",
  "answer3Total": "0",
  "answer4": "6.0%",
  "answer4Total": "0",
},

{
  "question": "What is the common misunderstanding about asexual?",
  "answer1": "It means celibacy or abstinence.",
  "answer1Total": "0",
  "answer2": "It only happens because someone can’t find the right partner",
  "answer2Total": "0",
  "answer3": "It is a medical condition",
  "answer3Total": "0",
  "answer4": "All of the above",
  "answer4Total": "1",
},

{
  "question": "About the grey area in asexuality:",
  "answer1": "There is no grey area in asexuality",
  "answer1Total": "0",
  "answer2": "Greysexual and demisexual are not part of asexual",
  "answer2Total": "0",
  "answer3": "Grey area means the person must be in the middle of feeling sexual and asexual",
  "answer3Total": "0",
  "answer4": "There is gray area in asexuality",
  "answer4Total": "1",
},

{
  "question": "Asexuals can fall in love with other sexual people romantically and can maintain a proper romantic relationship.",
  "answer1": "True, they can ",
  "answer1Total": "1",
  "answer2": "False, they only fall in love with other asexual ",
  "answer2Total": "0",
  "answer3": "False, they can't have sex with sexual people",
  "answer3Total": "0",
  "answer4": "True, they can, but for their sexual partners it means no sex",
  "answer4Total": "0",

},

{
  "question": "Panromantic is a romantic orientation for the asexuals and it means",
  "answer1": "Having romantic feeling with a pan",
  "answer1Total": "0",
  "answer2": "Romantically attracted to/desires romantic relationships without gender being a factor",
  "answer2Total": "1",
  "answer3": "Nothing, it just a label",
  "answer3Total": "0",
  "answer4": "Only having romantic feeling with pansexuals",
  "answer4Total": "0",

},

{
  "question": "About sexual intimacy for asexual:",
  "answer1": "Asexuals don't masturbate",
  "answer1Total": "0",
  "answer2": "There is no sexual intimacy for asexual",
  "answer2Total": "0",
  "answer3": "Asexuals can enjoy sexual intimacy with others and masturbate while not being sexually attracted to anyone. " ,
  "answer3Total": "1",
  "answer4": "They obey their own rule of Abstinence",
  "answer4Total": "0",

},

{
  "question": "What are the opinions toward sex the asexuals can have?",
  "answer1": "They are personally averse to the idea of having sex themselves",
  "answer1Total": "0",
  "answer2": "They are indifferent; don't mind having sex despite experiencing no sexual attraction",
  "answer2Total": "0",
  "answer3": "Both; the same variation exists for asexuals as for non-asexuals (some sexual people are quite happy to have sex with someone they are not sexually attracted to, but for others this idea is unthinkable.) ",
  "answer3Total": "1",
  "answer4": "An asexual would never have sex",
  "answer4Total": "0",


},


{
  "question": "Can asexuals become sexually aroused?",
  "answer1": "Many asexuals experience sexual arousal.",
  "answer1Total": "0",
  "answer2": "Some asexuls experience sexual arousal but only with people they have romantic feelings",
  "answer2Total": "0",
  "answer3": "Some asexuals do not experience sexual arousal",
  "answer3Total": "0",
  "answer4": "All of the above",
  "answer4Total": "1",

},


{
  "question": "Are asexuals against other people having sex?",
  "answer1": "Only very few asexuals are open-minded in their attitudes about sex",
  "answer1Total": "0",
  "answer2": "Attitudes towards sex and its role in culture differ from person to person",
  "answer2Total": "1",
  "answer3": " They do not engage in sex because they have a sex-negative value system",
  "answer3Total": "0",
  "answer4": "Yes, they are anti-sexual",
  "answer4Total": "0",

}


]
  



let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz-container');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');


function generateQuestions (index) {
    
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total; 
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;
     
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`)
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}


function loadNextQuestion () {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    
    if(!selectedOption) {
        alert('Please select your answer!');
        return;
    }
    
    const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

    
    score.push(answerScore);

    selectedAnswersData.push()
    

    const totalScore = score.reduce((total, currentNum) => total + currentNum);

    
    currentQuestion++;

        
        selectedOption.checked = false;
    
    if(currentQuestion == totalQuestions - 1) {
        nextButton.textContent = 'Finish';
    }
    
    if(currentQuestion == totalQuestions) {
        container.style.display = 'none';
        result.innerHTML =
         `<h1 class="final-score">Your Got ${totalScore} right out of 10 questions!</h1>
      
         <div class="summary">
            <p>For more information about Asexuality, please see <a href="https://www.asexuality.org"> https://www.asexuality.org</a></p>
            
           
          
        </div>
        <button class="restart">Take it again!</button>
         `;
        return;
    }
    generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    
    currentQuestion--;
    
    score.pop();
    
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    
    currentQuestion = 0;
    score = [];
    
    location.reload();
    }

}


generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);