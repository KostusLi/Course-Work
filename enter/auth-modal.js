document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.getElementById("loginBtn");
    const loginBtnMobile = document.getElementById("loginBtnMobile");
    const loginOverlay = document.getElementById("loginOverlay");
    const closeLogin = document.getElementById("closeLogin");
    const loginConfirmBtn = document.getElementById("login-btn");

    const accountPanel = document.getElementById("accountPanel");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const logoutBtn = document.getElementById("logoutBtn");
    const registerBtn = document.querySelector(".register-btn");

    function openLoginModal() {
        loginOverlay.classList.add("active");
    }

    function closeLoginModal() {
        loginOverlay.classList.remove("active");
    }

    function getCookie(name) {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    function deleteCookie(name) {
        document.cookie = `${name}=; path=/; max-age=0`;
    }

    function showAccountPanel(username) {
        loginBtn.style.display = "none";
        loginBtnMobile.style.display = "none";
        if (registerBtn) registerBtn.style.display = "none";
        accountPanel.style.display = "block";
        welcomeMessage.textContent = `Добро пожаловать, ${username}!`;
    }

    loginBtn.addEventListener("click", (event) => {
        event.preventDefault();
        openLoginModal();
    });

    loginBtnMobile.addEventListener("click", (event) => {
        event.preventDefault();
        openLoginModal();
    });

    closeLogin.addEventListener("click", closeLoginModal);

    loginOverlay.addEventListener("click", (event) => {
        if (event.target === loginOverlay) {
            closeLoginModal();
        }
    });

    loginConfirmBtn.addEventListener("click", () => {
        const usernameInput = document.getElementById("username").value.trim();
        const passwordInput = document.getElementById("password").value;

        const savedUsername = getCookie('username');
        const savedPassword = getCookie('password');

        if (usernameInput === savedUsername && passwordInput === savedPassword) {
            alert("Вы успешно вошли!");
            closeLoginModal();
            showAccountPanel(savedUsername);
        } else {
            alert("Неверный логин или пароль!");
        }
    });

    logoutBtn.addEventListener("click", () => {
        deleteCookie('username');
        deleteCookie('password');
        location.reload();
    });

    const autoLoginUsername = getCookie('username');
    const autoLoginPassword = getCookie('password');

    if (autoLoginUsername && autoLoginPassword) {
        showAccountPanel(autoLoginUsername);
    }
});
