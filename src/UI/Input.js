import React from 'react'
import styles from './Input.module.css'
const Input = React.forwardRef((props, ref) => {
    return (
        <div className={styles.input}>
            <label >{props.label}</label>
            <input  type="text" ref={ref} {...props.input} />
        </div>
    )
})

export default Input
