document.addEventListener("DOMContentLoaded", function () {
    const answerButtons = document.querySelectorAll('.answer');
    let hasVotedSim = false;
  
    const questionLinks = {
      "Se a vida fosse flores": "https://forms.gle/hGpaJmqpPMgtv2as6",
      "Cheiro de amor": "https://forms.gle/wfaMRc5xVogmiZ3G6",
      "Futebol e uma nação": "https://forms.gle/KVBK5K6WhiaZ4Gew5",
      "Vazio": "https://forms.gle/U2UtFsBJtLppa8X39",
      "Os pássaros": "https://forms.gle/z5esmx2CGKCp88HC7",
      "A minha escola": "https://forms.gle/x7k7K6gSS2DbxAeX7",
      "Amor de fases": "https://forms.gle/T9rBYCahRkrmPAw18",
      "Universo": "https://forms.gle/HGv3bh7jmXxdk8Mt5",
      "Antes que tudo acabe": "https://forms.gle/NL1MCbrCom6XNc1t9",
      "Turmalina": "https://forms.gle/xomopab416NonExL6"
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
  