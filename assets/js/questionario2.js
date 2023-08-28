document.addEventListener("DOMContentLoaded", function () {
    const answerButtons = document.querySelectorAll('.answer');
    let hasVotedSim = false;
  
    const questionLinks = {
      "O amargo da xícara vazia": "https://forms.gle/LtUFvnwPBPbJzTYj7",
      "Nossas raizes": "https://forms.gle/aJFHoqbQyxBy6ZRT6",
      "Outrora": "https://forms.gle/b66mihySq2WiStqY9",
      "O espelho de um sentimentalista": "https://forms.gle/HWrvMhugV5gL4F896",
      "correntes da liberdade": "https://forms.gle/v85HJNYz7N6A4GyA6",
      "Desilusões": "https://forms.gle/b3QQunqbiADa5wt9A",
      "Encontro de almas": "https://forms.gle/NtJQFJhEKhtkduBY9",
      "Eu sou a poesia": "https://forms.gle/S9JrfHu4jD13cWsf8",
      "Para hoje": "https://forms.gle/hjEpMqKuc6FnGXC4A",
      "A enfermidade da vida": "https://forms.gle/kmQvCJGYhLKu2bVB7"
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
  