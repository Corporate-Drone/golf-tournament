import React from 'react'
import { useHistory } from 'react-router-dom';

import './_Button.scss'

function Button(props) {
    const { text, className, buttonClick, type} = props;

    return (
        <button type="submit" onClick={buttonClick}className={className}>{text}</button>
    )
}

export default Button
