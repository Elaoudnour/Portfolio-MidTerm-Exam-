const questions = [
    { question: "What does IP stand for in networking?", options: ["Internet Process", "Internal Protocol", "Internet Protocol", "Information Path"], answer: "Internet Protocol" },
    { question: "Which country has the longest coastline in the world?", options: ["Australia", "Canada", "Russia", "United States"], answer: "Canada" },
    { question: "Which of the following is a strong password example?", options: ["12345678", "P@$$w0rd", "Gt#9Lp!rPz2$", "password2024"], answer: "Gt#9Lp!rPz2$" },
    { question: "What is the capital of Brazil?", options: ["São Paulo", "Rio de Janeiro", "Brasília", "Buenos Aires"], answer: "Brasília" },
    { question: "Which programming language is known as the 'mother of all languages'?", options: ["Java", "C", "Python", "Assembly"], answer: "C" },
    { question: "Which ocean is located between Africa and Australia?", options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"], answer: "Indian Ocean" },
    { question: "What does AI stand for in technology?", options: ["Automated Intelligence", "Advanced Information", "Artificial Intelligence", "Algorithmic Integration"], answer: "Artificial Intelligence" },
    { question: "Which famous desert is the largest in the world?", options: ["Sahara Desert", "Gobi Desert", "Antarctica", "Kalahari Desert"], answer: "Antarctica" },
    { question: "Which company developed the Windows operating system?", options: ["Apple", "IBM", "Google", "Microsoft"], answer: "Microsoft" },
    { question: "Which country is home to Mount Fuji?", options: ["China", "Japan", "Indonesia", "South Korea"], answer: "Japan" }
];

function loadQuiz() {
    const quizContainer = document.getElementById("questions");
    quizContainer.innerHTML = "";
    questions.forEach((q, index) => {
        let questionHTML = `<p><strong>${index + 1}. ${q.question}</strong></p>`;
        q.options.forEach(option => {
            questionHTML += `<input type="radio" name="q${index}" value="${option}"> ${option} <br>`;
        });
        quizContainer.innerHTML += questionHTML;
    });
}

function submitQuiz() {
    let score = 0;
    let correctAnswersText = "<strong>Correct Answers:</strong><br>";
    questions.forEach((q, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && selected.value === q.answer) {
            score++;
        }
        correctAnswersText += `${index + 1}. ${q.answer}<br>`;
    });
    document.getElementById("result").innerText = `You scored ${score} out of ${questions.length}!`;
    document.getElementById("correct-answers").innerHTML = correctAnswersText;
}

window.onload = loadQuiz;