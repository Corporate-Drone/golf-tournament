import React, { useEffect } from 'react'

import './_Register.scss';
import RegisterForm from '../components/Form/RegisterForm';

function Register() {

    useEffect(() => {
        document.body.style.background = "url('/registrationBackground.jpg')";
        
        document.body.style.backgroundSize = "cover";
    }, [])

    return (
        <div className="Register">
            <RegisterForm/>
        </div>
    )
}

export default Register
