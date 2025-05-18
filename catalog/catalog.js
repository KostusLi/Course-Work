document.addEventListener('DOMContentLoaded', function () {
    const catalogContainer = document.getElementById('catalog');
    const searchInput = document.getElementById('search');
    let games = [];

    function renderCatalog(filteredGames) {
        catalogContainer.innerHTML = '';
        filteredGames.forEach(game => {
            const card = document.createElement('div');
            card.className = 'catalog-card';
            card.dataset.id = game.id;
            
            card.innerHTML = `
                <img src="${game.image}" alt="${game.title}">
                <h3>${game.title}</h3>
            `;

            card.addEventListener('click', function () {
                window.location.href = `catalog-detail.html?id=${game.id}`;
            });

            catalogContainer.appendChild(card);
        });
    }

    fetch('catalog.json')
        .then(response => response.json())
        .then(data => {
            games = data;
            renderCatalog(games);
        })
        .catch(error => {
            console.error('Ошибка загрузки каталога:', error);
        });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredGames = games.filter(game => game.title.toLowerCase().includes(query));
        renderCatalog(filteredGames);
    });
});
