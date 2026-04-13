alert("Welcome to Abraham's Chess Project!");
console.log("Welcome to Abraham's Chess Project!");

document.addEventListener('DOMContentLoaded', () => {
    const chessFactBtn = document.getElementById('chessFactBtn');
    const chessFactOutput = document.getElementById('chessFactOutput');

    if (chessFactBtn && chessFactOutput) {
        chessFactBtn.addEventListener('click', () => {
            const fact = "The longest forced win in a legal chess position (proven by tablebases) requires 549 moves to deliver checkmate — and it involves a king, two knights, and a bishop vs. a lone king (with some very specific pawn placements). It's so absurdly long that under the old 50-move rule, the game would have been declared a draw long before the win.";
            chessFactOutput.textContent = fact;
            chessFactOutput.classList.add('show');
            console.log('Chess fact shown:', fact);
        });
    }
});
