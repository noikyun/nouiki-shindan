let currentQuestion = 0;

let scores = {
    E:0,
    I:0,
    T:0,
    U:0,
    S:0,
    M:0,
    C:0,
    D:0,
    Va:0,
    Ds:0,
    SM:0
};

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

    const q = questions[currentQuestion];

    if(choice === "A"){
        scores[q.aScore]++;
    }else{
        scores[q.bScore]++;
    }

    currentQuestion++;

    if(currentQuestion >= questions.length){
        showResult();
        return;
    }

    showQuestion();
}

function showResult(){

    const total = scores.E + scores.I;

    const ePercent =
        Math.round((scores.E / total) * 100);

    const iPercent =
        Math.round((scores.I / total) * 100);

    let type =
        scores.E >= scores.I ? "E型" : "I型";

    document.querySelector(".container").innerHTML = `

        <h1>診断結果</h1>

        <h2>${type}</h2>

        <p>E ${ePercent}%</p>

        <p>I ${iPercent}%</p>

    `;
}