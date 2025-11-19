// Character data with descriptions
const characters = {
    rachel: {
        name: "Rachel Berry",
        emoji: "⭐",
        description: "You're ambitious, talented, and never afraid to go after your dreams! Like Rachel, you have a strong sense of determination and a passion for the spotlight. You're driven to succeed and always give 110% in everything you do.",
        traits: "Ambitious • Talented • Determined • Passionate"
    },
    finn: {
        name: "Finn Hudson",
        emoji: "🏈",
        description: "You're the heart of the group! Like Finn, you're kind, loyal, and always there for your friends. You might not always know the right thing to say, but your genuine care for others shines through.",
        traits: "Loyal • Kind-hearted • Leader • Compassionate"
    },
    kurt: {
        name: "Kurt Hummel",
        emoji: "✨",
        description: "You're fabulous and unapologetically yourself! Like Kurt, you express yourself through creativity and style. You're brave enough to be different and inspire others to embrace their uniqueness.",
        traits: "Creative • Fabulous • Brave • Unique"
    },
    mercedes: {
        name: "Mercedes Jones",
        emoji: "👑",
        description: "You're confident, talented, and demand the respect you deserve! Like Mercedes, you have incredible talent and won't settle for being underestimated. You know your worth and aren't afraid to show it.",
        traits: "Confident • Powerful • Self-assured • Talented"
    },
    blaine: {
        name: "Blaine Anderson",
        emoji: "🎩",
        description: "You're charming, optimistic, and bring joy wherever you go! Like Blaine, you have a positive energy that lights up a room. You're genuine, talented, and always ready with a smile.",
        traits: "Charming • Optimistic • Genuine • Positive"
    },
    santana: {
        name: "Santana Lopez",
        emoji: "💃",
        description: "You're bold, witty, and fiercely loyal to those you care about! Like Santana, you don't sugarcoat things and you're not afraid to speak your mind. Your tough exterior hides a deeply caring heart.",
        traits: "Bold • Witty • Loyal • Honest"
    }
};

// Get form and result elements
const quizForm = document.getElementById('quiz-form');
const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const resultContent = document.getElementById('result-content');
const restartBtn = document.getElementById('restart-btn');

// Handle form submission
quizForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if all questions are answered
    const totalQuestions = 6;
    let answeredQuestions = 0;
    
    for (let i = 1; i <= totalQuestions; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            answeredQuestions++;
        }
    }
    
    if (answeredQuestions < totalQuestions) {
        alert('Please answer all questions before submitting!');
        return;
    }
    
    // Calculate results
    const results = calculateResults();
    displayResult(results);
});

// Calculate which character the user gets
function calculateResults() {
    const answers = {};
    
    // Count votes for each character
    for (let i = 1; i <= 6; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) {
            const character = answer.value;
            answers[character] = (answers[character] || 0) + 1;
        }
    }
    
    // Find the character with the most votes
    let maxVotes = 0;
    let resultCharacter = 'rachel';
    
    for (const [character, votes] of Object.entries(answers)) {
        if (votes > maxVotes) {
            maxVotes = votes;
            resultCharacter = character;
        }
    }
    
    return resultCharacter;
}

// Display the result
function displayResult(character) {
    const characterData = characters[character];
    
    resultContent.innerHTML = `
        <div class="character-result">
            <div class="character-emoji">${characterData.emoji}</div>
            <h3>${characterData.name}</h3>
            <p>${characterData.description}</p>
            <p><strong>${characterData.traits}</strong></p>
        </div>
    `;
    
    // Hide quiz and show result with smooth transition
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    
    // Scroll to top to see result
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Restart the quiz
restartBtn.addEventListener('click', function() {
    // Reset form
    quizForm.reset();
    
    // Show quiz and hide result
    quizContainer.style.display = 'block';
    resultContainer.style.display = 'none';
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
