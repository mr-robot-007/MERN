
import axios from "./utils/axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./App";


function Home() {
  let { user } = useContext(UserContext);
  
  return <button onClick = {function () {
    axios.get ("http://localhost:5000/v1/users/check").then((response)=>{
      console.log(response.data);
    })
  }
}>Click Me</button>
}


export default Home;
