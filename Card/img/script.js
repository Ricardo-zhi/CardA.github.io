// DOM
const swiper = document.querySelector('#swiper');
const like = document.querySelector('#like');
const dislike = document.querySelector('#dislike');

// constants
const urls = [
  // 'https://source.unsplash.com/random/1000x1000/?sky',
  // 'https://source.unsplash.com/random/1000x1000/?landscape',
  // 'https://source.unsplash.com/random/1000x1000/?ocean',
  // 'https://source.unsplash.com/random/1000x1000/?moutain',
  // 'https://source.unsplash.com/random/1000x1000/?forest'
  './1.jpg',
  './2.jpg',
  './3.jpg',
  './4.jpg',
    './5.jpg',
  //   './img/22.jpg',
  //   './img/23.jpg',
    
  //   './img/24.jpg',
  //   './img/25.jpg',
  //   './img/12.jpg',
  //  './img/55.gif', 
    './22.jpg'
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 6],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = 'running';
      like.classList.toggle('trigger');
    },
    onDislike: () => {
      dislike.style.animationPlayState = 'running';
      dislike.classList.toggle('trigger');
    }
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll('.card:not(.dismissing)');
  cards.forEach((card, index) => {
    card.style.setProperty('--i', index);
  });
}

// first 12 cards
for (let i = 0; i < 6; i++) {
  appendNewCard();
}

