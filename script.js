

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

let collapse = document.querySelector('.selection__collapse');
let collapseFlag = false;
let cards = document.querySelector('.cards');