document.addEventListener('DOMContentLoaded', function() {
    const newsDetail = document.getElementById('news-detail');
    const urlParams = new URLSearchParams(window.location.search);
    const newsId = urlParams.get('id');

    fetch('news.json')
        .then(response => response.json())
        .then(data => {
            const newsItem = data.find(item => item.id == newsId);
            if (newsItem) {
                const tagsHTML = newsItem.tags.map(tag => 
                    `<span class="news-tag">${tag}</span>`
                ).join('');
                
                newsDetail.innerHTML = `
                    <div class="news-hero">
                        <div class="news-hero-content">
                            <h1>${newsItem.title}</h1>
                            <div class="news-meta">
                                <span class="news-author">Автор: ${newsItem.author}</span>
                                <span class="news-category">${newsItem.category}</span>
                                <span class="news-time">${newsItem.time}</span>
                            </div>
                            <div class="news-tags">${tagsHTML}</div>
                        </div>
                        <div id="slider">
                            <img src="${newsItem.image}" alt="${newsItem.title}" class="news-hero-image">
                            <img src="${newsItem.image1}" alt="${newsItem.title}" class="news-hero-image">
                            <img src="${newsItem.image2}" alt="${newsItem.title}" class="news-hero-image">
                        </div>
                    </div>
                    <div class="news-article">
                        <p class="news-intro">${newsItem.description}</p>
                        ${newsItem.article.split('\n').map(paragraph => 
                            `<p>${paragraph}</p>`
                        ).join('')}
                    </div>
                `;
                initSlider();
            } else {
                newsDetail.innerHTML = '<p class="error">Новость не найдена</p>';
            }
        })
        .catch(error => {
            console.error('Error loading news:', error);
            newsDetail.innerHTML = '<p class="error">Ошибка загрузки новости</p>';
        });

        function initSlider() {
            const slider = document.getElementById('slider');
            const images = slider.querySelectorAll('.news-hero-image');
            let currentIndex = 0;
          
            function nextSlide() {
              images[currentIndex].style.transform = 'translateX(+100%)';
              
              const nextIndex = (currentIndex + 1) % images.length;
              images[nextIndex].style.transform = 'translateX(0)';
              
              currentIndex = nextIndex;
            }
          
            setInterval(nextSlide, 6000);
          }
});