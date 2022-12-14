//! Imports
import { useState } from 'react'
import FormInput from '../form-input/form-input.component.jsx';
import Button from '../button/button.component.jsx';
import {
    signInWithGooglePopup,
    signInAuthUserWithEmailAndPassword

} from "../../utils/firebase/firebase.utils.js";
import './sign-in.styles.scss'

//! State
const defaultFormFields = {
    email: '',
    password: '',

}
//! Functional Component
const SignInForm = () => {

    //! useState Hook
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    // !Methods 
    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    }

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await signInAuthUserWithEmailAndPassword(email, password)
            resetFormFields();
        } catch (error) {
            switch (error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Credientials')
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with email.')
                    break;
                default:
                    console.log(error)
            }

        }
        resetFormFields();
    }









    //! Return statement (What will be rendered on screen)
    return (
        <div className='sign-in-container'>
            <h2> Already have an account?</h2>
            <span>Sign in with your email and password.</span>
            <FormInput
                label="Email"
                type="email"
                required onChange={handleChange}
                name="email"
                value={email}
            />

            <FormInput
                label="Password"
                type="password"
                required onChange={handleChange}
                name="password"
                value={password}
            />

            <div className="buttons-container">
                <Button buttonType="submit" onClick={handleSubmit}> Sign In</Button>
                <Button type="button" buttonType="google" onClick={signInWithGoogle}> Google Sign In</Button>
            </div>

        </div>
    )
}

export default SignInForm