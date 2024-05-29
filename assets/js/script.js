document.addEventListener("DOMContentLoaded", function() {
    const holes = document.querySelectorAll(".mole-hole");
    const scoreDisplay = document.getElementById("score-value");
    const timerDisplay = document.getElementById("timer-value");
    let score = 0;
    let timeLeft = 60;

    function getRandomHole() {
        const index = Math.floor(Math.random() * holes.length);
        return holes[index];
    }

    function showMole() {
        const hole = getRandomHole();
        const moleImg = document.createElement("img");
        moleImg.src = "assets/images/mole.png";
        moleImg.classList.add("mole");
        hole.appendChild(moleImg);
        setTimeout(() => {
            moleImg.remove();
            showMole();
        }, 1500);
    }

    function updateTimer() {
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            endGame();
        } else {
            timeLeft--;
            setTimeout(updateTimer, 1000);
        }
    }

    document.querySelector("#grid").addEventListener("click", function(event) {
        const moleImg = event.target;
        if (moleImg.classList.contains("mole")) {
            moleImg.remove();
            increaseScore();
        }
    });

    function increaseScore() {
        score++;
        scoreDisplay.textContent = score;
    }

    function endGame() {
        alert("Game Over! Your final score is: " + score);
        score = 0; // Reset the score to zero
        scoreDisplay.textContent = score; // Update the score display
        timeLeft = 60; // Reset the timer
        updateTimer(); // Restart the timer
        showMole(); // Restart the game
    }

    showMole();
    updateTimer();
});