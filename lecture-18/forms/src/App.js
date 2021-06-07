// import logo from './logo.svg';
import './App.css';
import { Box, makeStyles, Button, TextField } from '@material-ui/core';
import axios from 'axios';
let useStyles = makeStyles({
  root: {
    width: "100vw",
    minHeight: "100vh",
    background: "lightgrey",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",


  },
  headerImage: {
    marginTop: "50px",
    width: "600px",
    height: "150px",
    borderRadius: "15px",

  },
  inputBox: {
    marginTop: "20px",
    width: "600px",
    height: "150px",
    borderRadius: "15px",
    background: "white",
  }

})




function App() {

  let classes = useStyles();
  let submitForm = function () {
    var FullName = document.getElementById("outlined-basic1").value;
    var ContactNumber = document.getElementById("outlined-basic2").value;
    var Email = document.getElementById("outlined-basic3").value;
    var College = document.getElementById("outlined-basic4").value;


    let data = {
      name: FullName,
      number: ContactNumber,
      email: Email,
      college: College,
    }


    axios.post("http://localhost:5000/submit/", data).then((response) => {
      console.log(response);
      window.alert("Your response has been submitted.");
      window.location.reload();
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <Box className={classes.root}>

      <div style={{
        position: "relative",
      }}>
        <img className={classes.headerImage} src="https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg" alt="img" ></img>
        <h1
          style={{
            color: "white",
            position: "absolute",
            bottom: "8px",
            left: "15px",
          }}>Building Google Form</h1>
      </div>

      <Box className={classes.inputBox} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}>
        <div style={{
          margin: "20px",
        }}>Full Name</div>
        <TextField id="outlined-basic1" label="Your Answer" variant="outlined"
          style={{
            margin: "10px",
          }} />
      </Box>

      <Box className={classes.inputBox} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}>
        <div style={{
          margin: "20px",
        }}>Contact Number</div>
        <TextField id="outlined-basic2" label="Your Answer" variant="outlined"
          style={{
            margin: "10px",
          }} />
      </Box>

      <Box className={classes.inputBox} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}>
        <div style={{
          margin: "20px",
        }}>Email</div>
        <TextField id="outlined-basic3" label="Your Answer" variant="outlined"
          style={{
            margin: "10px",
          }} />
      </Box>

      <Box className={classes.inputBox} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "left",
      }}>
        <div style={{
          margin: "20px",
        }}>College/University</div>
        <TextField id="outlined-basic4" label="Your Answer" variant="outlined"
          style={{
            margin: "10px",
          }} />
      </Box>

      <Button variant="contained" onClick={submitForm}
        style={{
          marginTop: "10px",
          marginBottom: "20px",
        }} >Click Here</Button>
    </Box>
  );
}

export default App;
