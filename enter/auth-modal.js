document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const loginBtnMobile = document.getElementById("loginBtnMobile"); // Для мобильного меню
    const loginOverlay = document.getElementById("loginOverlay");
    const closeLogin = document.getElementById("closeLogin");

    // Функция для открытия окна авторизации
    function openLoginModal() {
        loginOverlay.classList.add("active");
    }

    // Функция для закрытия окна авторизации
    function closeLoginModal() {
        loginOverlay.classList.remove("active");
    }

    // Открытие окна при нажатии на кнопку "Войти"
    loginBtn.addEventListener("click", (event) => {
        event.preventDefault(); // Отмена стандартного перехода по ссылке
        openLoginModal();
    });

    // Открытие окна на мобильной версии
    loginBtnMobile.addEventListener("click", (event) => {
        event.preventDefault();
        openLoginModal();
    });

    // Закрытие окна при нажатии на кнопку "×"
    closeLogin.addEventListener("click", closeLoginModal);

    // Закрытие окна при клике на затемненный фон
    loginOverlay.addEventListener("click", (event) => {
        if (event.target === loginOverlay) {
            closeLoginModal();
        }
    });
});
