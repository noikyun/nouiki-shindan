document.addEventListener("DOMContentLoaded", () => {

const startButton = document.getElementById("startButton");

startButton.addEventListener("click", () => {

showQuestion(0);

});

});

function showQuestion(index){

const q = questions[index];

document.querySelector(".container").innerHTML = `

<h1>Q${q.id}</h1>

<p class="subtitle">
${q.question}
</p>

<button class="answer-btn">
${q.a}
</button>

<br><br>

<button class="answer-btn">
${q.b}
</button>

`;

}