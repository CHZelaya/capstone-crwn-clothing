import { React } from 'react';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';


import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";


const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user);
        return userDocRef;
    }





    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}> Sign in with Google PopUp </button>
            <SignUpForm />
        </div>

    )
}

export default SignIn;