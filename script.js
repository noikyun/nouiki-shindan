let currentQuestion = 0;

let scores = {
    E: 0,
    I: 0,
    T: 0,
    U: 0,
    S: 0,
    M: 0,
    C: 0,
    D: 0,
    Va: 0,
    Ds: 0,
    SM: 0
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

    if (choice === "A") {
        scores[q.aScore]++;
    } else {
        scores[q.bScore]++;
    }

    currentQuestion++;

    if (currentQuestion >= questions.length) {
        showResult();
        return;
    }

    showQuestion();
}

function showResult() {

    const totalEI = scores.E + scores.I;
    const totalTU = scores.T + scores.U;

    const ePercent =
        Math.round((scores.E / totalEI) * 100) || 0;

    const iPercent =
        Math.round((scores.I / totalEI) * 100) || 0;

    const tPercent =
        Math.round((scores.T / totalTU) * 100) || 0;

    const uPercent =
        Math.round((scores.U / totalTU) * 100) || 0;

    const eiType =
        scores.E >= scores.I ? "E" : "I";

    const tuType =
        scores.T >= scores.U ? "T" : "U";

    const type =
        eiType + tuType;

    let title = "";

    if (type === "ET") {
        title = "欲望を理解されることで深まりやすいタイプ";
    }

    if (type === "EU") {
        title = "導かれることで深まりやすいタイプ";
    }

    if (type === "IT") {
        title = "想像を理解されることで深まりやすいタイプ";
    }

    if (type === "IU") {
        title = "安心して委ねることで深まりやすいタイプ";
    }

    document.querySelector(".container").innerHTML = `

        <div class="result-card">

            <h1>診断結果</h1>

            <h2>${type}</h2>

            <h3>${title}</h3>

            <div class="bar-area">

                <p>E ${ePercent}%</p>

                <div class="bar">
                    <div class="fill"
                    style="width:${ePercent}%">
                    </div>
                </div>

                <p>I ${iPercent}%</p>

                <div class="bar">
                    <div class="fill"
                    style="width:${iPercent}%">
                    </div>
                </div>

                <p>T ${tPercent}%</p>

                <div class="bar">
                    <div class="fill"
                    style="width:${tPercent}%">
                    </div>
                </div>

                <p>U ${uPercent}%</p>

                <div class="bar">
                    <div class="fill"
                    style="width:${uPercent}%">
                    </div>
                </div>

            </div>

        </div>

    `;
}