// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    // signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider
} from 'firebase/auth';
import {
    getFirestore,
    doc, //* doc allows you to retrieve documents from the database
    getDoc, //* Get data from document
    setDoc, //* Set data to the document

} from 'firebase/firestore';






// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBpomS1flZnWJsM_2nV3y3fD7HhCMJNLFQ",
    authDomain: "crwn-clothing-db-262f1.firebaseapp.com",
    projectId: "crwn-clothing-db-262f1",
    storageBucket: "crwn-clothing-db-262f1.appspot.com",
    messagingSenderId: "316467418869",
    appId: "1:316467418869:web:86422f182743fc6fb817bc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());


    //* "!" Reverses the boolean, returning true will equal false, returning false will equal true.
    //* Ergo, if a user exists, .exists() method will return true, ! will flip it to false and the code block following the if statement will not run. 
    //* Likewise, if a user does not exist, .exists() method will return false, ! will flip the boolean to true and the following code block will run.

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (error) {
            console.log("error creating user", error.message);
        }
    }

    return userDocRef;
}





