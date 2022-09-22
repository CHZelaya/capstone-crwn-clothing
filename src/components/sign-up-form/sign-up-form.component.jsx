// import { async } from '@firebase/util';
import { useState } from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils.js'



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    // console.log("Global Console Log for Form fields: ", formFields)

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Todo: 1. Check that password and Confirm Password are correct
        // Todo: 2. Check to see if user is authenticated with email and password
        // Todo: 3. Create a user document from information returned from Authentication

    }

    return (
        <div>
            <h1>Sign up with your email and password</h1>
            <form onSubmit={handleSubmit}>
                <label>Display name</label>
                <input
                    type="text"
                    required onChange={handleChange}
                    name="displayName"
                    value={displayName}

                />

                <label>Email</label>
                <input
                    type="email"
                    required onChange={handleChange}
                    name="email"
                    value={email}

                />

                <label>Pasword</label>
                <input
                    type="password"
                    required onChange={handleChange}
                    name="password"
                    value={password}

                />

                <label>Confirm Password</label>
                <input
                    type="password"
                    required onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}

                />

                <button type="submit">Sign Up</button>

            </form>
        </div>
    )
}

export default SignUpForm