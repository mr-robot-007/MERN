
import React, { useState ,useEffect} from 'react';
import './App.css';
import Login from "./Login";
import Home from "./Home";
import {firebase} from './utils/firebase';

let UserContext = React.createContext();



function App() {


  let [user, setUser] = useState();

  useEffect(function () {
    firebase.auth().onAuthStateChanged(user => {

      setUser(user);
      console.log(user);
    });
  }, []);


  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className="App">
        <Login />
        <Home />
      </div>
    </UserContext.Provider>
  );
}

export { App, UserContext };
