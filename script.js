
// slider best-card
let sliders = document.querySelectorAll('.card-best__img-slide'); // нашёл все слайдеры на странице
for (let i = 0; i < sliders.length; i++) { // на каждый слайдер
    (function() {
        let btnLeft = sliders[i].querySelector('.card-best__slide-left'); // левая кнопка
        let btnRight = sliders[i].querySelector('.card-best__slide-right'); // правая кнопка
        let sliderImages = sliders[i].querySelectorAll('.card-best__image'); // все картинки в разметке в слайдере
        let counter = 0; // счётчик

        function updateSlider() {
            sliderImages.forEach((img, index) => {
                img.style.left = (50 + ( index - counter) * 200) + '%'; // Сдвигаем изображение в зависимости от счетчика: пересчитывает left каждой картинке в слайдере
            });
            btnLeft.classList.toggle('hidden', counter === 0); // Скрываем левую кнопку, если это первое изображение
            btnRight.classList.toggle('hidden', counter === sliderImages.length - 1); // Скрываем правую кнопку, если это последнее изображение
        }
		
        btnLeft.addEventListener('click', function() { // по нажатию на левую
            console.log('Левая кнопка нажата на слайдере ' + (i + 1));
            if (counter > 0) {
                counter -= 1;
            }
            updateSlider();
        });
        btnRight.addEventListener('click', function() { // по нажатию на правую
            console.log('Правая кнопка нажата на слайдере ' + (i + 1));
            if (counter < sliderImages.length - 1) {
                counter += 1;
            }
            updateSlider();
        });
        updateSlider();
    })();
}



//hidden cards
let collapseButton = document.querySelector('.selection__collapse');
let collapseFlag = false;
let cards = document.querySelectorAll('.card-min');
let btnExpand = document.querySelector('.card-min__expand');

function updateCardVisibility() {
    const mediaQuery1024 = window.matchMedia('(max-width: 1024px)');
    const mediaQuery600 = window.matchMedia('(max-width: 600px)');

    cards.forEach(card => card.classList.add('hidden')); // Скрываем все карточки по умолчанию
	btnExpand.classList.remove('hidden');

    if (mediaQuery600.matches) {
        // Если ширина экрана меньше 600px, показываем только первые 3 карточек
        for (let i = 0; i < 3; i++) {
            if (cards[i]) {
                cards[i].classList.remove('hidden');
            }
        }
    } else if (mediaQuery1024.matches) {
        // Если ширина экрана меньше 1024px, показываем только первые 6 карточек
        for (let i = 0; i < 6; i++) {
            if (cards[i]) {
                cards[i].classList.remove('hidden');
            }
        }
    } else {
        // Если ширина экрана больше 1024px, показываем все карточки
        cards.forEach(card => card.classList.remove('hidden'));
		btnExpand.classList.add('hidden');		
    }

}
updateCardVisibility();
window.addEventListener('resize', updateCardVisibility);

function showAllCards() {
    cards.forEach(card => card.classList.remove('hidden')); // Показываем все карточки
    btnExpand.classList.add('hidden'); // Скрываем кнопку
	console.log('показать все машины');
}
btnExpand.addEventListener('click', showAllCards);


function toggleButton() {
    if (collapseFlag) {
        // Если список свернут
        collapseButton.textContent = "Свернуть список машин";
        collapseButton.style.color = "var(--primary-color)";
        collapseButton.style.backgroundColor = "#FFFFFF";
		document.querySelector('.cards').classList.remove('hidden');
    } else {
        // Если список развернут
        collapseButton.textContent = "Развернуть список машин";
        collapseButton.style.color = "#FFFFFF";
        collapseButton.style.backgroundColor = "var(--primary-color)";
		document.querySelector('.cards').classList.add('hidden');		
    }
    // Меняем состояние
    collapseFlag = !collapseFlag;
}
collapseButton.addEventListener('click', toggleButton);

