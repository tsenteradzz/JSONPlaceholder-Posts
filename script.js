document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => {
            const postsContainer = document.getElementById('posts-container');
            posts.forEach(post => {
                const postElement = document.createElement('div');
                postElement.classList.add('post');
                postElement.innerHTML = `
                    <h2 class="post-title">${post.title}</h2>
                    <p class="post-body">${post.body}</p>
                `;
                postElement.addEventListener('click', function() {
                    console.log('Clicked post ID:', post.id);
                });
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const postId = 1;
    
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(post => {
            console.log('Post:', post);
        })
        .catch(error => {
            console.error('Error fetching post:', error);
        });
});
