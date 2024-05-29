document.addEventListener("DOMContentLoaded", function() {
    const holes = document.querySelectorAll(".mole-hole");
    const scoreDisplay = document.getElementById("score-value");
    const timerDisplay = document.getElementById("timer-value"); // Add timer display element
    let score = 0;
    let timeLeft = 60; // Set initial time to 60 seconds

    // Function to randomly select a mole hole
    function getRandomHole() {
        const index = Math.floor(Math.random() * holes.length);
        return holes[index];
    }

    // Function to make the mole appear in a random hole
    function showMole() {
        const hole = getRandomHole();
        const moleImg = document.createElement("img");
        moleImg.src = "assets/images/mole.png"; // Path to your mole image
        moleImg.classList.add("mole");
        hole.appendChild(moleImg);
        setTimeout(() => {
            moleImg.remove();
            showMole(); // Show another mole after a delay
        }, 1500); // Adjust the delay (in milliseconds) as needed
    }

    // Function to update the timer display
    function updateTimer() {
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            endGame();
        } else {
            timeLeft--;
            setTimeout(updateTimer, 1000); // Update timer every second
        }
    }

    // Event listener for mole click
    document.querySelector("#grid").addEventListener("click", function(event) {
        const moleImg = event.target;
        if (moleImg.classList.contains("mole")) {
            moleImg.remove();
            increaseScore();
        }
    });

    // Function to increase score when mole is hit
    function increaseScore() {
        score++;
        scoreDisplay.textContent = score;
    }

    // Function to end the game
    function endGame() {
        alert("Game Over! Your final score is: " + score);
        // You can add more actions here if needed
    }

    // Start the game
    showMole();
    updateTimer();
});