document.addEventListener('DOMContentLoaded', function () {
	// Get all the holes where the mole can appear
	const holes = document.querySelectorAll('.mole-hole');
	// Get the display elements for score and timer
	const scoreDisplay = document.getElementById('score-value');
	const timerDisplay = document.getElementById('timer-value');
	let score = 0;
	let timeLeft = 60;
	let moleInterval;
	let previousHole;

	// Function to get a random hole for the mole to appear in
	function getRandomHole() {
		const index = Math.floor(Math.random() * holes.length);
		const hole = holes[index];

		// Ensure the mole doesn't appear in the same hole twice in a row
		if (hole === previousHole) {
			return getRandomHole();
		}

		previousHole = hole;
		return hole;
	}

	// Function to show the mole in a random hole
	function showMole() {
		const hole = getRandomHole();
		const moleImg = document.createElement('img');
		
		// moleImg.src = 'assets/images/mole.webp';
		moleImg.src = 'assets/images/mole.webp';
		// moleImg.style.background = "transparent";
		moleImg.classList.add('mole');
		hole.appendChild(moleImg);

		// Remove the mole after 1.5 seconds
		setTimeout(() => {
			moleImg.remove();
		}, 1500);
	}

	// Function to update the timer display
	function updateTimer() {
		timerDisplay.textContent = timeLeft;

		// End the game if the timer reaches 0
		if (timeLeft === 0) {
			endGame();
		} else {
			timeLeft--;
		}
	}

	// Event listener for clicking on the grid
	document.querySelector('#grid').addEventListener('click', function (event) {
		const moleImg = event.target;

		// If the clicked element is a mole, remove it and increase the score
		if (moleImg.classList.contains('mole')) {
			moleImg.remove();
			increaseScore();
		}
	});

	// Function to increase the score
	function increaseScore() {
		score++;
		scoreDisplay.textContent = score;
	}

	// Function to end the game
	function endGame() {
		clearInterval(moleInterval); // Stop the mole from appearing
		alert('Game Over! Your final score is: ' + score); // Show final score
		score = 0; // Reset the score
		scoreDisplay.textContent = score;
		timeLeft = 60; // Reset the timer
		startGame(); // Restart the game
	}

	// Function to start the game
	function startGame() {
		updateTimer(); // Update the timer display
		moleInterval = setInterval(() => {
			showMole(); // Show the mole at intervals
			updateTimer(); // Update the timer
		}, 1500);
	}

	startGame(); // Initialize the game on page load
});