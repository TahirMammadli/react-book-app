import React from 'react'

const Input = React.forwardRef((props, ref) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" ref={ref} {...props.input} />
        </div>
    )
})

export default Input
