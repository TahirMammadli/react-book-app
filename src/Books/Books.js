import React, { useState } from "react";
import styles from "./Books.module.css";
import Card from "../UI/Card";
import { Fragment } from "react/cjs/react.production.min";
import BookList from "./BookList/BookList";

const Books = (props) => {
  let booksPresent = props.booksPresent;
  const messagePresent = props.messagePresent;
 

  const books = props.bookArr;
  return (
    <Fragment>
      <div className={styles['message-flex']}>
      {messagePresent && <div className={styles.message}>Book edited!</div>}

      </div>
      <div className={styles["books-flex"]}>

        <Card>
          <div className={styles.books}>
            {booksPresent ? (
              books.map((book) => {
                return (
                  <ul>
                   
                    <BookList book={book}/>
                  </ul>
                );
              })
            ) : (
              <h1>No books found.</h1>
            )}
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Books;
