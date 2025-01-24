let quizData = [
    {
        question: "What is the capital of Japan?",
        options: ["Tokyo", "Kyoto", "Osaka","London"],
        correct: ["Tokyo"]
    },

    {
        question: " The first 3 number of pie is?",
        options:["3.03","3.14","3.15","3.16"],
        correct:["3.14"]
    },
      {
        question: "What is the largest mammal in the world?",
        options:["Ant","Lion","Elephant","Blue Whale"],
        correct:["Blue Whale"]
      },

      {
        question: "What is the largest ocrean in the world?",
        options:["Pacific Ocean","Indian ocean","River nile","Atlantic Ocean"],
        correct:["Pacific ocean"]
      },

      {
        question:"What is the largest continent in the world?",
        options:["Africa","Asia","Europe"," United States of America"],
        correct:["Asia"]
      },


      {
        question:"What is the largest planet in the solar system?",
        options:["Mars","Jupiter","Earth","Saturn"],
        correct:["Jupiter"]
      },

      {
        question:"Who is the riches person in the world?",
        options:["Elon Musk","Jeff Bezos","Me","You"],
        correct:["Elon Musk"]

      }



];



const  quizContainer = document.querySelector(".Quiz-container");
const question = document.querySelector(".Quiz-container .question");
const nextBtn = document.querySelector(".Quiz-container .next-Bn");
const options = document.querySelector(".Quiz-container .ans");
const quizResult = document.querySelector(".quiz-result");


let questionNumber = 0;
let score = 0;
const maxQuestions = quizData.length;


const shuffleArray = (array) => {
    return array.slice().sort(() => Math.random() - 0.5);

};

quizData = shuffleArray(quizData);



const checkAnswer = (e) => {
    const userAnswer = e.target.textContent;
    let allOptions = document.querySelectorAll(".Quiz-container .option");

    if (userAnswer == quizData[questionNumber].correct[0]){
        score++;
        e.target.classList.add("correct");
    } else {
        e.target.classList.add("incorrect");
    }

    allOptions.forEach(o => {
        if (o !== e.target){
            o.classList.add("disabled");
            o.disabled = true;
        }
        if(o.textContent === quizData[questionNumber].correct[0]) {
            o.classList.add("correct");
        } else{
            o.disabled = false;
        }
    });

    if (score === maxQuestions){
        window.location.href = 'winner.html';
    }
};



const createQuestion = () => {
    question.innerHTML = `<span class ' question-number'>${
        questionNumber + 1
    }/${maxQuestions}</span>${quizData[questionNumber].question}`;
    options.innerHTML = '';
    quizData[questionNumber].options.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click",(e) => {
            checkAnswer(e);
        });
        options.appendChild(option);


    });
    };

    const displayQuizResult = () => {
        quizResult.style.display = 'flex';
        quizContainer.style.display = 'none';
        quizContainer.innerHTML = "";
        const resultHeading = document.createElement("h2");
        resultHeading.innerHTML = `You Have Scored ${score} out of ${maxQuestions}.`
        quizResult.appendChild(resultHeading);

    }
    createQuestion();


    const displayNextQuestion = () => {
        if (questionNumber >= maxQuestions - 1){
            displayQuizResult();
            return;
        }
        questionNumber++;
        createQuestion();
    }

    nextBtn.addEventListener("click",displayNextQuestion)
