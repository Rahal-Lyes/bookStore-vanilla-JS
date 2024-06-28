
class Book {
    constructor(text, author, isbn) {
        this.text = text;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks() {
        const StoredBooks = [
            {
                text: 'Php',
                author: 'Laravel', // "Author" corrected to "author"
                isbn: '#AB2548RV32'
            },
            {
                text :'JavaScript',
                author: 'NODEJS', // "Author" corrected to "author"
                isbn: '#AC2548RV32'
            }
        ];
        const books = StoredBooks;
        books.forEach((book) => UI.addBookToList(book));
    }
    
    static addBookToList(book) {
        const list = document.getElementById('books-list'); // removed '#'
        const row = document.createElement('tr'); // corrected typo
  
        row.innerHTML = `
   
        <td>${book.text}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href='#' class='p-1 hover:bg-red-100'><i class='fas fa-trash-alt delete'></i></a></td>
     
        `;
        list.appendChild(row);
    }

    static clearFields(){
        document.querySelectorAll('input[type="text"]').forEach(input => input.value = '');
    }

    static deleteBook(book){
if(book.classList.contains('delete')){
    book.parentElement.parentElement.parentElement.remove();
    console.log(book.parentElement.parentElement.parentElement);
}
    }
}

document.addEventListener('DOMContentLoaded', UI.displayBooks);

document.getElementById('book-form').addEventListener('submit',(e)=>{
e.preventDefault();
const formData = new FormData(e.target);

const title = formData.get('title');
const author = formData.get('author');
const isbn = formData.get('isbn');
const book=new Book(title,author,isbn);
UI.addBookToList(book);
UI.clearFields();
})
document.getElementById('books-list').addEventListener('click',(e)=>{
UI.deleteBook(e.target);
})
