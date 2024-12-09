const container = document.getElementById('container');

    container.addEventListener('scroll', () => {
      const cards = document.querySelectorAll('.card');
      const firstCard = cards[0];
      const lastCard = cards[cards.length - 1];

      if (container.scrollTop === 0) {
        container.insertBefore(lastCard, firstCard);
        container.scrollTop += lastCard.offsetHeight;
      }

      if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
        container.appendChild(firstCard);
        container.scrollTop -= firstCard.offsetHeight;
      }

      highlightCenterCard();
    });

    function highlightCenterCard() {
      const cards = document.querySelectorAll('.card');
      const containerCenter = container.scrollTop + container.clientHeight / 2;

      cards.forEach(card => card.classList.remove('active'));

      cards.forEach(card => {
        const cardTop = card.offsetTop;
        const cardBottom = card.offsetHeight + cardTop;
        if (containerCenter > cardTop && containerCenter < cardBottom) {
          card.classList.add('active');
        }
      });
    }

    highlightCenterCard();