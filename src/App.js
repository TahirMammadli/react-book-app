import React, {useState} from 'react'
import Header from "./Header/Header";
import Books from "./Books/Books";
import AddBook from "./Books/AddBook";
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editedBook, setEditedBook] = useState()
  const [booksArr, setBooksArr] = useState([])
  let updatedBooksArr = [...booksArr];
  let updatedBook;
  function addBookHandler(book){
    updatedBooksArr = setBooksArr(booksArr.concat(book))
  }
  function deleteHandler(id){
    console.log('clicked')
    updatedBooksArr = setBooksArr(booksArr.filter(book => id !== book.id))
  }
  function editBookHandler(book){
    setIsOpen(true);
    setIsEditMode(true);
    setEditedBook(book)

  }
  console.log(editedBook)
 function openModalHandler(){
   setIsOpen(true)
 }
 function closeModalHandler(){
   setIsOpen(false)
 }
function editBookContentHandler(editableBook){
 
    const existingBookIndex = booksArr.findIndex(
      (book) => book.id === editableBook.bookId
    );
    const existingBook = booksArr[existingBookIndex];
    updatedBook = {...existingBook, title: editableBook.updatedTitle, author: editableBook.updatedAuthor, isbn: editableBook.updatedIsbn}
    booksArr[existingBookIndex] = updatedBook;
  

}
  return (
   <div>
     {isOpen && <AddBook book={editedBook} onEditBook={editBookContentHandler} isEditMode={isEditMode} onAddBook={addBookHandler} onCloseModal={closeModalHandler}/>} 

    
     <Header onOpenModal={openModalHandler}/>
     <Books bookArr={updatedBooksArr} onDelete={deleteHandler} onEdit={editBookHandler}/>
    
   </div>
  );
}

export default App;
