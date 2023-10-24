const quizQuestions = [
    "What is the capital of France?",
    "Which planet is known as the Red Planet?",
    "Which gas do plants absorb from the atmosphere?",
    "What is the largest mammal on Earth?",
    "Which of these countries is located in South America"
];

const quizChoices = [
    ["Paris", "Berlin", "Madrid", "Rome"],
    ["Earth", "Mars", "Jupiter", "Venus"],
    ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    ["Giraffe", "Elephant", "Blue whale", "Kangaroo"],
    ["Germany", "Australia", "Argentina", "Japan"]
];

const correctAnswers = ["Paris", "Mars", "Carbon dioxide", "Blue whale", "Argentina"];

let currentQuestionIndex = 0;
let score = 0;

// Get references to elements
const questionElement = document.querySelector(".question-container");
const answerBtns = document.querySelectorAll(".btn");
const nextButton = document.getElementById("next-btn");

// Function to start the quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

// Function to show questions
function showQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        const currentQuestion = quizQuestions[currentQuestionIndex];
        questionElement.textContent = currentQuestion;

        const choices = quizChoices[currentQuestionIndex];

        // Enable and display answer choices
        for (let i = 0; i < choices.length; i++) {
            const answerBtn = answerBtns[i];
            answerBtn.textContent = choices[i];
            answerBtn.disabled = false; // Enable the button

            // Remove any background color from previous selections
            answerBtn.style.backgroundColor = "";

            // Add a click event listener to each button
            answerBtn.addEventListener("click", () => handleAnswerClick(i));
        }
    } else {
        questionElement.textContent = "Quiz Completed";
    }
    } 




function nextQuestion() {
    // Increment the current question index to move to the next question
    currentQuestionIndex++;

    // Check if there are more questions
    if (currentQuestionIndex < quizQuestions.length) {
        showQuestion(); // Display the next question
    } else {
        // If there are no more questions, display a completion message
        for (let i = 0; i < answerBtns.length; i++) {
            answerBtns[i].style.display = "none";
        }
        nextButton.style.display = "none";
        questionElement.textContent = "Quiz Completed";
    }
}

// Add an event listener to the "Next" button
nextButton.addEventListener("click", nextQuestion);
// ... (previous code)

// Add event listeners to the answer buttons for handling user selections
answerBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        handleAnswerClick(index);
    });
});


    function handleAnswerClick(selectedIndex) {
        const selectedAnswer = quizChoices[currentQuestionIndex][selectedIndex];
        const correctAnswer = correctAnswers[currentQuestionIndex];
    
        // Disable the buttons after an answer is selected
        answerBtns.forEach((btn, index) => {
            btn.disabled = true;
            if (index === selectedIndex) {
                if (selectedAnswer === correctAnswer) {
                    btn.style.backgroundColor = "green"; // Correct answer is green
                } else {
                    btn.style.backgroundColor = "red"; // Incorrect answer is red
                }
            } else if (quizChoices[currentQuestionIndex][index] === correctAnswer) {
                btn.style.backgroundColor = "green"; // Highlight the correct answer
            }
        });
    
        nextButton.style.display = "block";
    };

    nextButton.style.display = "block"; // Display the "Next" button
    nextButton.addEventListener("click", nextQuestion);
    





// Call the startQuiz function to initialize the quiz
startQuiz();
