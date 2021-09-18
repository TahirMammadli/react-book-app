import React, { useRef } from "react";
import Card from "../UI/Card";
import Input from "../UI/Input";
import styles from "./AddBook.module.css";
import Modal from "../Modal/Modal";

const AddBook = (props) => {
  const titleRef = useRef();
  const authorRef = useRef();
  const isbnRef = useRef();
  const isEditMode = props.isEditMode;

  let bookTitle;
  let bookAuthor;
  let bookIsbn;

  if (isEditMode) {
    bookTitle = props.book.title;
    bookAuthor = props.book.author;
    bookIsbn = props.book.isbn;
  }
  

  function addABook(event) {
    event.preventDefault();
    const enteredTitleRef = titleRef.current.value;
    const enteredAuthorRef = authorRef.current.value;
    const enteredIsbnRef = isbnRef.current.value;
    props.onAddBook({
      id: Math.floor(Math.random() * 10),
      title: enteredTitleRef,
      author: enteredAuthorRef,
      isbn: enteredIsbnRef,
    });
  }
  return (
    <Modal onCloseModal={props.onCloseModal}>
      <form onSubmit={addABook}>
        {isEditMode ? (
          <Input
            ref={titleRef}
            label={"Title"}
            input={{ type: "text", value: "{bookTitle}" }}
          />
        ) : (
          <Input ref={titleRef} label={"Title"} input={{ type: "text" }} />
        )}

        {isEditMode && (
          <Input
            ref={authorRef}
            label={"Author"}
            input={{ type: "text", value: { bookAuthor } }}
          />
        )}
        <Input ref={authorRef} label={"Author"} input={{ type: "text" }} />

        {isEditMode && (
          <Input
            ref={isbnRef}
            label={"ISBN"}
            input={{ type: "text", value: { bookIsbn } }}
          />
        )}
        <Input ref={isbnRef} label={"ISBN"} input={{ type: "text" }} />

        <button>Add a Book</button>
        <button onClick={props.onCloseModal}>Close</button>
      </form>
    </Modal>
  );
};

export default AddBook;
