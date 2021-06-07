
import { useContext } from 'react';
import { UserContext } from './App';
import './App.css';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import {firebase} from './utils/firebase';

function Login() {

    let { user, setUser } = useContext(UserContext);

    

    // Configure FirebaseUI.
    const uiConfig = { // Popup signin flow rather than redirect flow.
        signInFlow: 'popup',
        signInSuccessUrl: '/',
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        ],
    };

    return (
        <div style={{
            margin :"20px"
        }}>
            {user ?
                (<button onClick={function () {              //if user exist then this else (:) that
                    setUser(undefined);
                    firebase.auth().signOut();
                }} style={{
                    borderRadius:"5px",
                }}>Logout</button>
                )
                :
                (
                    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
                )}
        </div>
    );
}

export default Login;
