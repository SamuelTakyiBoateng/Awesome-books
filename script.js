const form = document.querySelector('.form');
const listOfBooks = document.querySelector('.container');
const title = document.querySelector('.title');
const author = document.querySelector('.author');
const btn = document.querySelector('.btn');

const books = localStorage.getItem('book') ? JSON.parse(localStorage.getItem('book')) : [];

const addBook = (e) => {
  e.preventDefault();
  const book = {
    id: Date.now,
    title: title.value,
    author: author.value,
  };
  if (book.id && book.title && book.author) {
    books.push(book);
  }
  form.reset();
  localStorage.setItem('book', JSON.stringify(books));
  document.location.reload();
};

books.forEach((element, e) => {
  const book = document.createElement('div');
  book.classList = 'book';

  book.innerHTML = `
  <h2 class="title">${books[e].title}</h2>
  <p class ="author">Author: <span></span>${books[e].author}</p>
  <button class="remove">Remove</button>
  <hr/>
  `;
  listOfBooks.append(book);
});

// Filter
function deleteBook(i) {
  books.splice(i, 1);
  localStorage.setItem('book', JSON.stringify(books));
  document.location.reload();
}

function activateDelete() {
  const remove = document.querySelectorAll('.remove');
  remove.forEach((btn, i) => {
    btn.addEventListener('click', () => { deleteBook(i); });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  btn.addEventListener('click', addBook);
  activateDelete();
});