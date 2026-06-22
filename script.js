document.addEventListener("DOMContentLoaded", () => {

    const startButton = document.getElementById("startButton");

    startButton.addEventListener("click", () => {

        document.querySelector(".container").innerHTML = `
            <h1>脳イキタイプ診断</h1>

            <p style="font-size:24px;">
                診断準備中...
            </p>

            <p>
                次のステップで質問画面を作成します。
            </p>
        `;

    });

});