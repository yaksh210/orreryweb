// Variables to track state
let currentQuestionIndex = 0;
let score = 0;
let selectedDifficulty = '';
const totalQuestions = 5; // Total questions per quiz
let questionsAnswered = 0;

// Sample questions for each difficulty level
const questions = {
    easy: [
        { question: "What planet is closest to the sun?", choices: ["Venus", "Mercury", "Mars", "Earth"], answer: 1 },
        { question: "How many planets are in the Solar System?", choices: ["7", "8", "9", "10"], answer: 1 },
        { question: "What planet is known as the Red Planet?", choices: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
        { question: "Which planet is known for its rings?", choices: ["Saturn", "Jupiter", "Uranus", "Neptune"], answer: 0 },
        { question: "Which planet is known as the Morning Star?", choices: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 0 }
    ],
    medium: [
        { question: "What is the largest planet in our solar system?", choices: ["Earth", "Jupiter", "Saturn", "Neptune"], answer: 1 },
        { question: "Which planet has the most moons?", choices: ["Mars", "Earth", "Saturn", "Jupiter"], answer: 3 },
        { question: "What is the hottest planet in our solar system?", choices: ["Mercury", "Venus", "Mars", "Jupiter"], answer: 1 },
        { question: "Which planet rotates on its side?", choices: ["Neptune", "Uranus", "Saturn", "Earth"], answer: 1 },
        { question: "What planet is known for its Great Red Spot?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], answer: 2 }
    ],
    hard: [
        { question: "What is the most distant planet from the sun?", choices: ["Uranus", "Neptune", "Pluto", "Eris"], answer: 1 },
        { question: "Which planet has the shortest day?", choices: ["Earth", "Jupiter", "Mars", "Saturn"], answer: 1 },
        { question: "What is the name of the galaxy that contains our Solar System?", choices: ["Andromeda", "Milky Way", "Triangulum", "Whirlpool"], answer: 1 },
        { question: "Which planet has the largest volcano?", choices: ["Earth", "Mars", "Venus", "Jupiter"], answer: 1 },
        { question: "What celestial object is at the center of our solar system?", choices: ["Earth", "Sun", "Moon", "Black Hole"], answer: 1 }
    ]
};

// DOM elements
const startBtn = document.getElementById('start-btn');
const difficultyPage = document.getElementById('difficulty-page');
const quizPage = document.getElementById('quiz-page');
const resultPage = document.getElementById('result-page');
const nextQuestionBtn = document.getElementById('next-question-btn');
const restartBtn = document.getElementById('restart-btn');
const scoreDisplay = document.getElementById('score');
const questionEl = document.getElementById('question');
const choicesEl = document.querySelector('.choices');
const levelTitle = document.getElementById('level-title');
const additionalFeedback = document.getElementById('additional-feedback');

// Start button event
startBtn.addEventListener('click', () => {
    document.getElementById('start-page').style.display = 'none';
    difficultyPage.style.display = 'block';
});

// Difficulty selection event
document.querySelectorAll('.difficulty-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        selectedDifficulty = e.target.dataset.level;
        difficultyPage.style.display = 'none';
        quizPage.style.display = 'block';
        startQuiz();
    });
});

// Start quiz function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    questionsAnswered = 0;
    loadQuestion();
    levelTitle.innerText = `Level: ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`;
}

// Load a question
function loadQuestion() {
    const currentQuestion = questions[selectedDifficulty][currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    choicesEl.innerHTML = ''; // Clear previous choices

    currentQuestion.choices.forEach((choice, index) => {
        const choiceBtn = document.createElement('button');
        choiceBtn.classList.add('choice-btn');
        choiceBtn.innerText = choice;
        choiceBtn.addEventListener('click', () => selectAnswer(index));
        choicesEl.appendChild(choiceBtn);
    });
}

// Select answer
function selectAnswer(selectedIndex) {
    // Increment score if the answer is correct
    if (selectedIndex === questions[selectedDifficulty][currentQuestionIndex].answer) {
        score++;
    }
    questionsAnswered++;

    // Disable choices after answering
    Array.from(choicesEl.children).forEach(button => {
        button.classList.add('disabled');
    });

    // Proceed to next question after 1 second
    if (questionsAnswered < totalQuestions) {
        currentQuestionIndex++;
        setTimeout(() => {
            loadQuestion();
        }, 1000); // Delay before loading next question
    } else {
        showResult(); // Show result page
    }
}

// Show result
function showResult() {
    quizPage.style.display = 'none';
    resultPage.style.display = 'block';
    scoreDisplay.innerText = `You scored ${score} out of ${totalQuestions}`;
    additionalFeedback.innerText = getFeedback();
}

// Feedback based on score
function getFeedback() {
    const percentage = (score / totalQuestions) * 100;
    if (percentage === 100) {
        return "Perfect score! You're a space genius!";
    } else if (percentage >= 75) {
        return "Great job! You have a good knowledge of space.";
    } else if (percentage >= 50) {
        return "Not bad! But there's still more to learn.";
    } else {
        return "Keep trying! Space is vast, and there's always more to explore.";
    }
}

// Restart quiz event
restartBtn.addEventListener('click', () => {
    resultPage.style.display = 'none';
    document.getElementById('start-page').style.display = 'block';
});
