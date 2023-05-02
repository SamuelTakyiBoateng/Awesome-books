//Add empty array to localStorage- check if empty and then add []
if(localStorage.getItem('addedBooks') == null){
    localStorage.setItem('addedBooks', JSON.stringify([]));
};

//Storage of Data->localStorage
const storeData = JSON.parse(localStorage.getItem('addedBooks'));
function updateData(){
    localStorage.setItem('addedBooks', JSON.stringify(storeData));
}

//Retrieve data from input field
const form = document.querySelector('.form');
form.addEventListener('submit', (e) =>{
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    e.preventDefault();
    addNewdata(title.value, author.value);
});

function createBooks(arr){
    let books= '';
    for (let i=0; i < arr.length; i++){
        books += `
        <p>${arr[i].title}</p>
        <p>${arr[i].author}</p>
        <button onclick = 'removeBook(${i})'>Remove</button>
        <hr/>
        `;
    }
    return books;
}

//Display data from localStorage to UI
function displayBooks(){
    const listOfBooks = document.querySelector('.container');
    listOfBooks.innerHTML = `
                    <ul class='book-ul'>
                    ${createBooks(storeData)}</ul>
    `
};

//Adding new data in the local storage
function addNewdata(bookTitle, bookAuthor){
    const Book = {
        title: bookTitle,
        author: bookAuthor
    };
    storeData.push(Book);
    updateData();
    displayBooks();
}

//Removing data from local Storage
function removeBook(i){
    storeData.splice(i,1);
    updateData();
    displayBooks();
}
removeBook();
window.onload =displayBooks();