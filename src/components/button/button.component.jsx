import React from 'react'
import './button.styles.scss'

const BUTTON_TYPES_CLASSES = {
    google: "google-sign-in",
    inverted: 'inverted'
}

const Button = ({ children, buttonType, ...otherTypes }) => {
    return (
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
            {...otherTypes}
        >
            {children}
        </button>
    )
}

export default Button