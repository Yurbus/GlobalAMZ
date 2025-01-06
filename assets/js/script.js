"use script"

const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows());
    }
};

// if (isMobile.any()) {
//     document.body.classList.add('_touch');
	
// 			let menuArrows = document.querySelectorAll('.menu-item-has-children');
// 			if (menuArrows.length > 0) {
// 				for (let index = 0; index < menuArrows.length; index++) {
// 					const menuArrow = menuArrows[index];
// 					menuArrow.addEventListener("click", function (e) {
// 						menuArrow.parentElement.classList.toggle('_active');
// 					});
// 				}
// 			}

// } else {
//     document.body.classList.add('_pc');
// }

if (isMobile.any()) {
    document.body.classList.add('_touch');
    
    // Находим все элементы с классом 'menu-item-has-children'
    let menuItems = document.querySelectorAll('.menu-item-has-children');
    if (menuItems.length > 0) {
        for (let index = 0; index < menuItems.length; index++) {
            const menuItem = menuItems[index];
            
            // Добавляем обработчик клика для каждого элемента
            menuItem.addEventListener("click", function (e) {
                e.stopPropagation(); // Останавливаем всплытие события
                
                // Убираем класс '_active' у всех других элементов
                menuItems.forEach((item) => {
                    if (item !== this) {
                        item.classList.remove('_active');
                    }
                });

                // Переключаем класс '_active' только у текущего элемента
                this.classList.toggle('_active');
            });
        }
    }
} else {
    document.body.classList.add('_pc');
}

// Меню бурнер
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.add('_lock');
		iconMenu.classList.add('_active');
		menuBody.classList.add('_active');
	});
}
const IconClose = document.querySelector('.burger');
if (IconClose) {
	IconClose.addEventListener("click", function (e) {
		document.body.classList.remove('_lock');
		iconMenu.classList.remove('_active');
		menuBody.classList.remove('_active');
	});
}

// -------- Accordion -----------------------------------------
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// -------- Scroll мышкой -----------------------------------------

let isMouseDown = false;
let startX, scrollLeft;

const container = document.querySelector('.flobal_ex__body');

// Функция для проверки, используется ли ПК
function isDesktop() {
    return window.innerWidth >= 1024; // Например, только для экранов шире 1024px
}

// Добавляем обработчики событий только на ПК
if (isDesktop()) {
    container.addEventListener('mousedown', (e) => {
        isMouseDown = true;
        container.style.cursor = 'grabbing';  // Изменяем курсор при захвате
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
        isMouseDown = false;
        container.style.cursor = 'grab';  // Восстанавливаем курсор, когда мышь покидает контейнер
    });

    container.addEventListener('mouseup', () => {
        isMouseDown = false;
        container.style.cursor = 'grab';  // Восстанавливаем курсор, когда отпускаем кнопку мыши
    });

    container.addEventListener('mousemove', (e) => {
        if (!isMouseDown) return; // Прокручиваем только, когда мышь нажата
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;  // Увеличиваем скорость прокрутки
        container.scrollLeft = scrollLeft - walk;
    });
}


// -------- Прокрутка при клике -----------------------------------------

// const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// if(menuLinks.length > 0) {
// 	menuLinks.forEach(menuLink => {
// 		menuLink.addEventListener("click", onMenuLinkClick);
// 	});

// 	function onMenuLinkClick(e) {
// 		const menuLink = e.target;
// 		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
		
// 			if (iconMenu.classList.contains('_active')) {
// 				document.body.classList.remove('_lock');
// 				iconMenu.classList.remove('_active');
// 				menuBody.classList.remove('_active');
// 			}

// 			window.scrollTo({
// 				top: gotoBlockValue,
// 				behavior: "smooth"
// 			});
// 			e.preventDefault();
// 		}
// 	}
// }


// --------- Переключение языка ------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    const headerLang = document.querySelector('.header__lang');
    const langList = document.querySelector('.lang__list');

    // Проверяем, является ли устройство мобильным
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    if (isMobile) {
        headerLang.addEventListener('click', function(event) {
            // Переключаем видимость меню при клике на мобильных устройствах
            if (langList.style.display === 'block') {
                langList.style.display = 'none';
            } else {
                langList.style.display = 'block';
            }
        });

        // Закрываем меню при клике вне его области
        document.addEventListener('click', function(event) {
            if (!headerLang.contains(event.target)) {
                langList.style.display = 'none';
            }
        });
    }
});


// ------- Section about прокрутка чисел ---------------------------------------
// Функция анимации чисел
function animateNumbers() {
    const numbers = document.querySelectorAll('.number');
    
    numbers.forEach((numElement) => {
        let targetValue = parseInt(numElement.textContent);
        let currentValue = 0;

        // Анимация от 0 до целевого значения
        const interval = setInterval(() => {
            currentValue += Math.ceil(targetValue / 100); // увеличение на маленькие шаги
            numElement.textContent = currentValue + "+";
            if (currentValue >= targetValue) {
                clearInterval(interval);
                numElement.textContent = targetValue + "+"; // Устанавливаем окончательное значение
            }
        }, 60); // Плавная анимация через каждые 30 мс
    });
}

// Отслеживание появления на экране
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            animateNumbers(); // Запуск анимации чисел
            observer.unobserve(entry.target); // Останавливаем отслеживание
        }
    });
}, { threshold: 0.5 }); // Порог 50% видимости

// Наблюдаем за всеми элементами .stat
const stats = document.querySelectorAll('.stat');
stats.forEach(stat => {
    observer.observe(stat);
});


// ------- Section about прокрутка чисел ---------------------------------------
// document.addEventListener('DOMContentLoaded', () => {
//     const statsBlock = document.getElementById('stats');
//     const stats = document.querySelectorAll('.stat');
//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 stats.forEach(stat => {
//                     const line = stat.querySelector('.line');
//                     const number = stat.querySelector('.number');
//                     const target = +number.getAttribute('data-target');
//                     stat.classList.add('visible');
//                     line.classList.add('visible');
//                     scrollToTarget(number, target);
//                 });
//                 observer.disconnect();
//             }
//         });
//     }, { threshold: 0.5 });

//     observer.observe(statsBlock);

//     function scrollToTarget(element, target) {
//         let start = 0;
//         const increment = target / 100;
//         const duration = 2000;
//         const stepTime = duration / 100;
//         const timer = setInterval(() => {
//             start += increment;
//             element.textContent = Math.round(start);
//             if (start >= target) {
//                 clearInterval(timer);
//                 element.textContent = target;
//             }
//         }, stepTime);
//     }
// });

