document.addEventListener("DOMContentLoaded", () => {
    const loginOverlay = document.getElementById("loginOverlay");
    const registerOverlay = document.createElement("div");
    registerOverlay.id = "registerOverlay";
    registerOverlay.classList.add("login-modal-overlay");
    registerOverlay.innerHTML = `
        <div class="login-modal">
            <button class="close-btn" id="closeRegister">&times;</button>
            <img src="../images/logo.webp" alt="Логотип" class="site-logo">
            <div class="form-group">
                <label for="new-username">Логин</label>
                <input type="text" id="new-username" placeholder="Введите логин">
            </div>
            <div class="form-group">
                <label for="new-password">Пароль</label>
                <input type="password" id="new-password" placeholder="Введите пароль">
            </div>
            <div class="form-group">
                <label for="confirm-password">Повторите пароль</label>
                <input type="password" id="confirm-password" placeholder="Введите пароль снова">
            </div>
            <div class="buttons-group">
                <button class="register-confirm-btn">Зарегистрироваться</button>
            </div>
        </div>
    `;
    document.body.appendChild(registerOverlay);

    const registerBtn = document.querySelector(".register-btn");
    const closeRegister = document.getElementById("closeRegister");

    registerBtn.addEventListener("click", (event) => {
        event.preventDefault();
        loginOverlay.classList.remove("active");
        registerOverlay.classList.add("active");
    });

    closeRegister.addEventListener("click", () => {
        registerOverlay.classList.remove("active");
    });

    registerOverlay.addEventListener("click", (event) => {
        if (event.target === registerOverlay) {
            registerOverlay.classList.remove("active");
        }
    });
});
