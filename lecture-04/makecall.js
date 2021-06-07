const axios = require("axios");

// axios.get("https://api.github.com/users/mr-robot-007").then(
//     function(response){
//         console.log(response.data);
//     }
// )
axios.get("https://api.github.com/users/duniapagalhaiy").then(
    function(response){
        console.log(response.data);
    }
).catch(
    function(error){
        console.log(error);
    }
)
