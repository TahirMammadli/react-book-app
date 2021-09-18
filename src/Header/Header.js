import React from 'react'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <div className={styles.header}>
          <h1>Book App</h1>
          
          <nav>
            <h2 className={styles['add-a-book']} onClick={props.onOpenModal}>
            Add a Book
            </h2>
            
          </nav>
        </div>
    )
}

export default Header
