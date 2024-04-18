const postsBtn = document.getElementById('posts-btn');
const usersBtn = document.getElementById('users-btn');
const photosBtn = document.getElementById('photos-btn');
const todosBtn = document.getElementById('todos-btn');
const contentDiv = document.getElementById('content');

const apiUrl = 'https://jsonplaceholder.typicode.com'; 

postsBtn.addEventListener('click', () => {
  fetch(`${apiUrl}/posts`)
    .then(response => response.json())
    .then(posts => {
      contentDiv.innerHTML = JSON.stringify(posts);
    });
});

usersBtn.addEventListener('click', () => {
  fetch(`${apiUrl}/users`)
    .then(response => response.json())
    .then(users => {
      contentDiv.innerHTML = JSON.stringify(users);
    });
});

photosBtn.addEventListener('click', () => {
  fetch(`${apiUrl}/photos`)
    .then(response => response.json())
    .then(photos => {
      contentDiv.innerHTML = JSON.stringify(photos);
    });
});

function crattodos(data) {
  console.log(data);

}

todosBtn.addEventListener('click', () => {
  fetch(`${apiUrl}/todos`)
    .then(response => response.json())
    .then(todos => {
      contentDiv.innerHTML = JSON.stringify(todos);
      crattodos(todos.slice(0, 15));
    });
});
