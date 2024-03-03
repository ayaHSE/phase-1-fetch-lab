function fetchBooks() {
  // Make a fetch request to the Game of Thrones API
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => {
      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      // Convert the response to JSON
      return response.json();
    })
    .then(jsonData => {
      // Call renderBooks() with the JSON data
      renderBooks(jsonData);
    })
    .catch(error => {
      console.error('Error fetching books:', error);
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
