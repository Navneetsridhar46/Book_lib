function AddDetails() {
    bookName = b1.value
    authorName = a1.value
    descriptionName = d1.value
    if (bookName, authorName, descriptionName == "") {
        alert("Fill the box ")
    }
    else if (bookName in localStorage) {
        alert("Already exists")
    }
    else {
        book = { bookName, authorName, descriptionName }
        localStorage.setItem(bookName, JSON.stringify(book))
        alert("Your book is added")
        window.location = "search.html"
    }
}

function searchBook() {
    bookName1 = bn1.value
    if (bookName1 in localStorage) {
        foundedBook = JSON.parse(localStorage.getItem(bookName1))
        result.innerHTML = `
        <h3 class="text-white">Book Name :${foundedBook.bookName}</h3>
        <h3 class="text-white">Author Name :${foundedBook.authorName}</h3>
        <h3 class="text-white">Description :${foundedBook.descriptionName}</h3>
        `
    }
    else {
        result.innerHTML = `<h3 class="text-white">Book not found</h3>`
    }
}

