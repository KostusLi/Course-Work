document.addEventListener('DOMContentLoaded', function() {
  const newsContainer = document.getElementById('news-container');
  
  function createNewsCard(newsItem) {
      const card = document.createElement('article');
      card.className = 'news-card';
      card.dataset.id = newsItem.id;
      
      const imageHTML = newsItem.image 
          ? `<div class="news-banner" style="background-image: url('${newsItem.image}')"></div>`
          : '';
      
      card.innerHTML = `
          ${imageHTML}
          <div class="news-content">
              <div class="news-header">
                  <h2>${newsItem.title}</h2>
                  <span class="news-meta">${newsItem.category} · ${newsItem.time}</span>
              </div>
              <p>${newsItem.description.substring(0, 100)}...</p>
          </div>
      `;
      
      card.addEventListener('click', () => {
          window.location.href = `news-detail.html?id=${newsItem.id}`;
      });
      
      return card;
  }
  
  fetch('news.json')
      .then(response => response.json())
      .then(data => {
          data.forEach(newsItem => {
              newsContainer.appendChild(createNewsCard(newsItem));
          });
      })
      .catch(error => {
          console.error('Error loading news:', error);
          newsContainer.innerHTML = '<p class="error">Не удалось загрузить новости</p>';
      });
});

