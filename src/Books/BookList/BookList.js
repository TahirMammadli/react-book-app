import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import styles from "./BookList.module.css"

const BookList = (props) => {
  return (
    <Fragment>
      <li className={styles.title}>{props.book.title}</li>
      <li>{props.book.author}</li>
      <li>ISBN: {props.book.isbn}</li>
      <div className={styles.buttons}>
      <li>
        <button onClick={() => props.onDelete(props.book.id)}>Delete</button>
      </li>
      <li>
        <button onClick={() => props.onEdit(props.book)}>Edit</button>
      </li>
      </div>
    </Fragment>
  );
};

export default BookList;
