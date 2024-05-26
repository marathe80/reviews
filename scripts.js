document.addEventListener('DOMContentLoaded', () => {
    const reviewsContainer = document.getElementById('reviews-container');
    const reviewForm = document.getElementById('review-form');

    const loadReviews = () => {
        const reviews = JSON.parse(localStorage.getItem('movieReviews') || '[]');
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewDiv = document.createElement('div');
            reviewDiv.classList.add('review');
            reviewDiv.innerHTML = `<h3>${review.title}</h3><p>${review.review}</p>`;
            reviewsContainer.appendChild(reviewDiv);
        });
    };

    reviewForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const review = document.getElementById('review').value;

        const reviews = JSON.parse(localStorage.getItem('movieReviews') || '[]');
        reviews.push({ title, review });
        localStorage.setItem('movieReviews', JSON.stringify(reviews));

        loadReviews();
        reviewForm.reset();
    });

    loadReviews();
});
