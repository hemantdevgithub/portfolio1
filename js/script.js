document.addEventListener("DOMContentLoaded", function () {
    const postsContainer = document.getElementById('posts-container');

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');

                const titleElement = document.createElement('h2');
                titleElement.classList.add('post-title');
                titleElement.textContent = post.title;

                const bodyElement = document.createElement('p');
                bodyElement.classList.add('post-body');
                bodyElement.textContent = post.body;

                postElement.appendChild(titleElement);
                postElement.appendChild(bodyElement);

                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error fetching posts:', error));
});
