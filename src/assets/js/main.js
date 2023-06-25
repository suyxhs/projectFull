

// HEADER SCRIPT

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector("#menu").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeOnClick);
});

// Закрытие попапа при клике на меню
function closeOnClick() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
}

// accordion animations
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const select = dropdown.querySelector('.select');
  const caret = dropdown.querySelector('.caret');
  const menu = dropdown.querySelector('.menu-time');
  const options = dropdown.querySelectorAll('.menu-time li');
  const selected = dropdown.querySelector('.selected');

  select.addEventListener('click', () => {
    select.classList.toggle('select-clicked');
    caret.classList.toggle('caret-rotate');
    menu.classList.toggle('menu-open');
  });
  options.forEach(option => {
    option.addEventListener('click', () => {
      selected.innerText = option.innerText;
      select.classList.remove('select-clicked');
      caret.classList.remove('caret-rotate');
      menu.classList.remove('menu-open');
      option.forEach(option => {
        option.classList.remove('active');
      });
      option.classList.add('active');
    })
  })
})

// accordion object
let akk = document.querySelectorAll('.akkord');

akk.forEach((item) => {
    let itemBody = item.querySelector('.container-showing')
    itemBody.style.height = '0px'
    item.querySelector('.container-date').onclick = function() {
        let akkordBody = this.closest('.akkord').querySelector('.container-showing')
        akkordBody.classList.toggle('container-showing-open')
        if( akkordBody.classList.contains('container-showing-open') ) {
            itemBody.style.height = '190px';
        }else {
            itemBody.style.height = '0px';
        }
    }
})

// MAP SCRIPT
let center = [59.94813793610263,30.378587766700726];

ymaps.ready(init);

function init() {
  let map = new ymaps.Map("map_id", {
    center: center,
    zoom: 13
  });

  let myPlacemark = new ymaps.Placemark(center, { 
    iconContent: 'Головной офис', //текст на иконке
    balloonContent: 'Красивый город' /*текст появляющийся после нажатия*/
}, {
    preset: 'islands#darkBlueStretchyIcon' //тип иконки
});

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  //map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  //map.geoObjects.add(placemark);
  map.geoObjects.add(myPlacemark);
}

// rating
$('.star.rating').click(function(){  
    $(this).parent().attr('data-stars',$(this).data('rating'));
  });