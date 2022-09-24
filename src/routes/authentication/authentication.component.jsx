import { React } from 'react';
import SignInForm from '../../components/sign-in-form/sign-in.component.jsx';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component.jsx';
import './authentication.styling.scss'





const Authentication = () => {

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>

    )
}

export default Authentication;