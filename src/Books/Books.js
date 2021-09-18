import React from "react";
import styles from "./Books.module.css";
import Card from "../UI/Card";

const Books = (props) => {
  const books = props.bookArr;
  return (
    <div className={styles["books-flex"]}>
      <Card>
        <div className={styles.books}>
          {books.map((book) => {
            return (
              <ul>
                <li>{book.title}</li>
                <li>{book.author}</li>
                <li>{book.isbn}</li>
                <li><button onClick={() => props.onDelete(book.id)}>Delete</button></li>
                <li><button onClick={() => props.onEdit(book)}>Edit</button></li>

              </ul>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

export default Books;
