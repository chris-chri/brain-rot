let quizData = [
    {
          question : "Finish this sentence:  ''You Know What Else is Massive____'' ",
          options : ["My Pokemon Collection","Low Taper Fade","Ninja","Your head"],
          correct: ["Low Taper Fade"]
    
    },
    {
        question: "Finish this sentence:  ''I Have Played These ___ Before!!''",
        options: ["Squid Games","Gmes","Before","Games"],
        correct: ["Games"]
    },


    {
        question: "Finish This sentence: ''Locked __ ''",
        options : ["In","Out","Door","Inmate"],
        correct : ["In"]
    },
    {
        question: "Finish This sentence:  ''I _______ it now''",
        options: ["Do","Dont Know","Understandbale","Understand"],
        correct : ["Understand"]
    },

    {
        question: "Finish This sentence:  ''The Eye Of ____''",
        options:["The Tiger","Rah","The Storm","The Sahara"],
        correct : ["Rah"]
    },

    {
        question:" 'What is the answer?'  : ''What is 9 + 11''",
        options:["21","23","1000","20"],
        correct: ["20"]
    },
    {
        question:" (Answer this  very carefully) : ''Is This the Best Website You have seen?'' ",
        options:["No","maybe","Yes","No bad website"],
        correct : ["Yes"]
    },

        
    {   question: "Finish This sentence:  ''You Think Your The King, No i am ______''",
        options:["The chosen one","The Queen","The King","The Prince"],
        correct:["The King"]

    }
];
const quizContainer = document.querySelector(".Quiz-container");
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


/// THIS CODE WAS SO DIFFICULT TO DEBUG OMG GOSH I HAD TO REPLACE THIS SO MANY TIMES FOR IT TO WORK I WASTED SO MUCH OF MY TIME ON A WEBSITE
const checkAnswer = (e) =>{
    let userAnswer = e.target.textContent;
    let allOptions = document.querySelectorAll(".Quiz-container .option");

    if (userAnswer == quizData[questionNumber].correct[0]){
        score++;
        e.target.classList.add("correct");
    } else{
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

    if(score === maxQuestions){
        window.location.href = `winner.html`;
    }

};
/// I WAS GOING TO MAKE A TIME BUT THE CODE WAS NOT WORKING OMG MAN I HAVE JAVA SCRIPT. WHO MADE THIS PROGRAMMING LANGUUAE MAN.
const createQuestion = () =>{
    question.innerHTML =  `<span class ='question-number'>${
    questionNumber + 1
    }/${maxQuestions}</span>${quizData[questionNumber].question};`
    options.innerHTML = '';
    quizData[questionNumber].options.forEach((o) => {
        const option = document.createElement("button");
        option.classList.add("option");
        option.innerHTML = o;
        option.addEventListener("click",(e) =>{
          checkAnswer(e);  
        });
        options.appendChild(option);
    });
};
const displayQuizResult = () => {
    quizResult.style.display = 'flex';
    quizContainer.style.display = 'none';
    quizContainer.innerHTML="";
    const resultHeading = document.createElement("h2");
    resultHeading.innerHTML = `You Have Scored ${score} out of ${maxQuestions}.`
    quizResult.appendChild(resultHeading);
}
createQuestion();

const displayNextQuestion = () =>{
    if (questionNumber>= maxQuestions - 1){
        displayQuizResult();
        return; 
    }
    questionNumber++;       
    createQuestion();
    
}

nextBtn.addEventListener("click",displayNextQuestion)


/// I GIVE UP AND I AM NOT DOING ANYTHING MORE IT WILL JUST RUIN MY PROGRAM.//


