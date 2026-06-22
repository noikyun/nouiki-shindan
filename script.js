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

    let title =
        scores.E >= scores.I
        ? "外的刺激優位型"
        : "内的刺激優位型";

    let description =
        scores.E >= scores.I
        ? "実際に起きる刺激から反応が始まりやすいタイプ"
        : "予感や空気感から反応が始まりやすいタイプ";

    document.querySelector(".container").innerHTML = `

        <div class="result-card">

            <h1>診断結果</h1>

            <h2>${type}</h2>

            <h3>${title}</h3>

            <p>${description}</p>

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

            </div>

        </div>

    `;
}