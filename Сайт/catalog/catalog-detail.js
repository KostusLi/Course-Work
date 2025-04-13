document.addEventListener('DOMContentLoaded', function () {
    const gameInfoContainer = document.getElementById('game-info');

    // Получаем id из URL
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = urlParams.get('id');

    if (!gameId) {
        gameInfoContainer.innerHTML = '<p class="error">Ошибка: игра не найдена.</p>';
        return;
    }

    fetch('catalog.json')
        .then(response => response.json())
        .then(data => {
            const game = data.find(game => game.id == gameId);
            if (!game) {
                gameInfoContainer.innerHTML = '<p class="error">Ошибка: игра не найдена.</p>';
                return;
            }

            gameInfoContainer.innerHTML = `
              <h1 class="game-title">${game.title}</h1>
                <div class="game-header">
                    <div class="game-info">
                        <img src="${game.image}" alt="${game.title}" class="game-image">
                    </div>
                    <div class="short-description">
                        <p><strong>Разработчик:</strong> ${game.developer || "Неизвестно"}</p>
                        <p><strong>Год выхода:</strong> ${game.releaseYear || "Неизвестно"}</p>
                        <p><strong>Категория:</strong> ${game.category || "Неизвестно"}</p>
                        <p><strong>Издатель:</strong> ${game.publisher || "Неизвестно"}</p>
                        <p><strong>Локализация:</strong> ${game.localization || "Неизвестно"}</p>
                        <p><strong>Таблетка:</strong> ${game.crackStatus || "Неизвестно"}</p>
                    </div>
                </div>

                <p class="game-description">${game.description || "Подробное описание отсутствует."}</p>

                <div class="trailer-container">
                    ${game.trailer ? 
                        `<iframe src="${game.trailer}" frameborder="0" allowfullscreen></iframe>` 
                        : "<p>Трейлер отсутствует.</p>"}
                </div>
                
                <div class="info">
                    <table class="table">
                        <tr class="stroke">
                            <td class="column1">Статус: </td>
                            <td class="column2"><img class="mark" src="../images/mark.svg">${game.status}</td>
                        </tr>

                        <tr class="stroke">
                            <td class="column1">Размер: </td>
                            <td class="column2">${game.size}</td>
                        </tr>
                    </table>
                </div>
                <div class="download">
                <a class="hreff" href="${game.href}">
                        <button class="button">Скачать</button>
                </a>
                </div>
                <a href="catalog.html" class="back-button">Назад в каталог</a>
            `;
        })
        .catch(error => {
            console.error('Ошибка загрузки данных об игре:', error);
        });
});
