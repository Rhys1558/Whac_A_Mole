document.addEventListener("DOMContentLoaded", function() {
    const holes = document.querySelectorAll(".mole-hole");
    const scoreDisplay = document.getElementById("score-value");
    let score = 0;

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

    // Start the game
    showMole();
});