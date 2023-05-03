const form = document.querySelector('.form');
const listOfBooks = document.querySelector('.container');
const title = document.querySelector('.title');
const author = document.querySelector('.author');

// Add empty array to localStorage- check if empty and then add []
if (localStorage.getItem('addedBooks') == null) {
  localStorage.setItem('addedBooks', JSON.stringify([]));
}

// Storage of Data->localStorage
const storeData = JSON.parse(localStorage.getItem('addedBooks'));
function updateData() {
  localStorage.setItem('addedBooks', JSON.stringify(storeData));
}

// Retrieve data from input field

form.addEventListener('submit', (e) => {
  e.preventDefault();
  addNewdata(title.value, author.value);
});

function createBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    books += `
        <p>${arr[i].title}</p>
        <p>${arr[i].author}</p>
        <button class="remove" onclick='removeBook(${i})'>Remove</button>
        <hr/>
        `;
  }
  return books;
}

// Display data from localStorage to UI
function displayBooks() {
  listOfBooks.innerHTML = `
                    <ul class='book-ul'>
                    ${createBooks(storeData)}</ul>
    `;
}

// Adding new data in the local storage
function addNewdata(bookTitle, bookAuthor) {
  const Book = {
    title: bookTitle,
    author: bookAuthor,
  };
  storeData.push(Book);
  updateData();
  displayBooks();
}

// Removing data from local Storage
function removeBook(i) {
  storeData.splice(i, 1);
  updateData();
  displayBooks();
}

window.onload = displayBooks();