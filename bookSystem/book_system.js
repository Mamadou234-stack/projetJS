let books = [];
function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Veuillez remplir tous les champs correctement.');
    }
}
function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>Numéro du livre : ${index + 1}</h1>
        <p><strong>Nom du livre : </strong>${book.name}</p>
        <p><strong>Nom de l'auteur :</strong> ${book.authorName}</p>
        <p><strong>Description du livre :</strong> ${book.bookDescription}</p>
        <p><strong>Nombre de pages :</strong> ${book.pagesNumber} page(s)</p>`
    );
    document.getElementById('books').innerHTML = booksDiv.join('');
}
function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}