
import { useContext } from 'react';
import { UserContext } from './App';
import './App.css';

function Home() {

    let { user } = useContext(UserContext);
    return (
        <div >
            <div>
                {
                    user ? (<img src={user.photoURL} style={{
                        borderRadius: "15px",
                        borderColor: "red",
                        borderStyle : "solid",
                        border : "25ppx",
                    }}></img>) : undefined
                }
            </div>
            <h1>{user ? user.displayName : undefined}</h1>
        </div>
    );
}

export default Home;
