document.addEventListener("DOMContentLoaded", function () {
    const answerButtons = document.querySelectorAll('.answer');
    let hasVotedSim = false;

    const questionLinks = {
      "Brincando com as palavras na praça dos leilões": "https://forms.gle/93JvC75WyPhic3sg8",
      "A vida de criança": "https://forms.gle/2c7b29CMb1M4yP4T8",
      "Um encanto no caminho do vale": "https://forms.gle/2M9syecdmVGgxZQe9",
      "A partitura do meu ser": "https://forms.gle/39wRrLv5MUhzP1og9",
      "O filósofo do sertão": "https://forms.gle/XkpU9FhPgtGL73JVA",
      "Mãos humanas": "https://forms.gle/Gm4ZhtsfNd1DZSEA8",
      "Ô se vale vencer": "https://forms.gle/1ZgcBSqznLjEc5CN9",
      "Paradoxal": "https://forms.gle/Zc7p2ZBKrvtWBn1L7",
      "Renascer da fé": "https://forms.gle/5Jy2YDBBBX6nsKuZ9",
      "O Brasil que eu quero": "https://forms.gle/rA8GEmH7NNMEzeys8"
    };
  
    answerButtons.forEach(button => {
      button.addEventListener('click', () => {
        const selectedAnswer = button.getAttribute('data-type');
  
        if (selectedAnswer === 'sim') {
          hasVotedSim = true;
          answerButtons.forEach(otherButton => {
            if (otherButton !== button) {
              otherButton.disabled = true;
            }
          });
        } else if (hasVotedSim) {
          button.disabled = true;
        }
  
        const currentQuestion = button.closest('.question');
        const questionText = currentQuestion.querySelector('p').textContent;
  
        const link = questionLinks[questionText];
        
        if (link) {
          window.location.href = link;
        }
      });
    });
  });
  