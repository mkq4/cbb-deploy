// script.js


document.addEventListener('DOMContentLoaded', () => {
    const openPopupButton = document.getElementById('openPopup');
    const popup = document.getElementById('popup');
    const closePopupButton = document.querySelectorAll('#closePopup');
    const sliderButton = document.querySelectorAll("#slider-button")
    const burgerIcon = document.getElementById('burgerIcon');
    const burgerMenu = document.getElementById('burgerMenu');
    const closeBurger = document.getElementById('closeBurger');
    const processLink = document.getElementById('process__link');
    const contactsMessage = document.getElementById('contacts-message');
    const contactsPopup =  document.getElementById('contacts-popup');
    const initialHeader = document.querySelector('.header');
    const stickyHeader = document.getElementById('stickyHeader');

    burgerIcon.addEventListener('click', () => {
        burgerMenu.style.display = 'flex';
        document.body.style.overflow = 'hidden'
    });
    processLink.addEventListener('click', () => {
        burgerMenu.style.display = 'none';
        document.body.style.overflow = 'scroll'
    })
    closeBurger.addEventListener('click', () => {
        burgerMenu.style.display = 'none';
        document.body.style.overflow = 'scroll'
    });
    sliderButton.forEach(el => {
        el.addEventListener('click', function() {
            popup.style.display = 'block';
            document.body.style.overflow = 'hidden'
        });
    })
    // Открытие попапа
    // sliderButton.addEventListener('click', function() {
    //     popup.style.display = 'block';
    // });
    openPopupButton.addEventListener('click', function() {
        popup.style.display = 'block';
        document.body.style.overflow = 'hidden'
    });
    // Закрытие попапа
    closePopupButton.forEach(el => el.addEventListener('click', () => {
        popup.style.display = 'none';
        contactsPopup.style.display = 'none';
        document.body.style.overflow = 'scroll'
    }))
    // closePopupButton.addEventListener('click', function() {
    //     popup.style.display = 'none';
    // });
    // Закрытие попапа при клике вне его
    window.addEventListener('click', function(event) {
        if (event.target === popup || event.target === contactsPopup) {
            popup.style.display = 'none';
            contactsPopup.style.display = 'none';
            document.body.style.overflow = 'scroll'
        }
    });

    contactsMessage.addEventListener('click', function() {
        contactsPopup.style.display = 'block'
        document.body.style.overflow = 'hidden'
    })


    // Функция для проверки позиции прокрутки
    function checkScroll() {
        if (window.scrollY > initialHeader.offsetHeight) {
            stickyHeader.style.display = 'block'; // Показываем новый хедер
        } else {
            stickyHeader.style.display = 'none'; // Скрываем новый хедер
        }
    }

    // Добавляем обработчик события прокрутки
    window.addEventListener('scroll', checkScroll);
});