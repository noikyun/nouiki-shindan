 let currentQuestion = 0;

let scoreE = 0;
let scoreI = 0;

document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {
        showQuestion();
    });

});

function showQuestion() {

    const q = questions[currentQuestion];

    document.querySelector(".container").innerHTML = `
        <h1>Q${q.id}</h1>

        <p class="subtitle">${q.question}</p>

        <button class="answer-btn" onclick="answerQuestion('A')">
            ${q.a}
        </button>

        <br><br>

        <button class="answer-btn" onclick="answerQuestion('B')">
            ${q.b}
        </button>
    `;
}

function answerQuestion(choice) {

    if (choice === "A") {
        scoreI++;
    } else {
        scoreE++;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    showQuestion();
}

function showResult() {

    const total = scoreE + scoreI;

    const ePercent =
        Math.round((scoreE / total) * 100);

    const iPercent =
        Math.round((scoreI / total) * 100);

    document.querySelector(".container").innerHTML = `
        <h1>診断結果</h1>

        <p>E ${ePercent}%</p>

        <p>I ${iPercent}%</p>
    `;
}