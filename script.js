const counterNode = document.querySelector('.js-counter');
const incBtnNode = document.querySelector('.js-inc-btn');
const clearBtnNode = document.querySelector('.js-clear-btn');

let balance = Math.floor(Number(localStorage.getItem('balance'))) || 0; // Округление до целого
let clicks = Math.floor(Number(localStorage.getItem('clicks'))) || 0; // Округление до целого
let imageIndex = Math.floor(Number(localStorage.getItem('imageIndex'))) || 0; // Добавляем сохранение индекса изображения

const balanceNode = document.createElement('span');
balanceNode.classList.add('balance'); // Класс для CSS
balanceNode.innerText = `Баланс: ${balance}`;
counterNode.appendChild(balanceNode);

const clicksNode = document.createElement('span');
balanceNode.classList.add('clicks');
clicksNode.innerText = `Кликов: ${clicks}`;
counterNode.appendChild(clicksNode);



incBtnNode.addEventListener('click', () => {
  clicks += 1;
  clicksNode.innerText = `Кликов: ${clicks}`;
  localStorage.setItem('clicks', clicks);

  if (clicks % 50 === 0) {
    imageIndex = (imageIndex + 1) % images.length; // Обновляем индекс изображения
    localStorage.setItem('imageIndex', imageIndex); // Сохраняем индекс изображения в localStorage
    changeImage();
  }
});

let currentBalance = balance;


clearBtnNode.addEventListener('click', () => {
  currentBalance += clicks / 10;
  balanceNode.innerText = `Баланс: ${currentBalance.toFixed(1)}`;
  clicks = 0;
  clicksNode.innerText = `Кликов: ${clicks}`;
  localStorage.setItem('balance', currentBalance);
  localStorage.setItem('clicks', clicks);
  imageIndex = 0; // Обнуляем индекс изображения
  localStorage.setItem('imageIndex', imageIndex); // Сохраняем индекс изображения в localStorage
  alert('Ваш баланс равен ' + currentBalance.toFixed(1) + ' рубля');
});

document.getElementById('resizeButton').addEventListener('click', function() {
  const image = document.getElementById('image');
  image.style.transform = 'scale(0.8)';

  // Воспроизведение музыки на 3 секунды
  const sounds = [
    'kot-myaukaet.mp3',
    'simpatichnyie-kotyata-zvukovoy-effekt-42841.mp3',
    'zvuk-koshachego-quotmyauquot-29443.mp3',
    'sound4.mp3',
    'sound5.mp3'
  ];
  const randomSounds = sounds.sort(() => Math.random() - 0.5).slice(0, 3);
  randomSounds.forEach((sound) => {
    const audio = new Audio(sound);
    audio.play();
  });

  setTimeout(() => {
    image.style.transform = 'scale(1)';
  }, 100);

});





const images = [
  'image.png',
  '1000022961.jpg',
  'download.jpg',
  '1000018602.jpg',
  'ккк.jpg',
  'аааа.jpg',
  'ааавамс.jpg',
  'iiii.jpg',
  'рашр.jpg',
];

function changeImage() {
  const image = document.getElementById('image');
  image.src = images[imageIndex];
}

// Обновляем изображение при загрузке страницы
const image = document.getElementById('image');
image.src = images[imageIndex];


const delitBtnNode = document.querySelector('.js-delit-btn');

delitBtnNode.addEventListener('click', () => {
ff = prompt('вы уверены что хотите обнулить баланс? да/нет');
if(ff === 'да'){
  currentBalance = 0;
  balanceNode.innerText = `Баланс: ${currentBalance}`;
  localStorage.setItem('balance', currentBalance);
  alert('Баланс обнулен!');
}else if(ff === 'нет'){
  alert('Баланс не обнулен!');
}else{
  alert('Баланс не обнулен! Т.к. Вы ввели неправильное значение');
}

 
});










