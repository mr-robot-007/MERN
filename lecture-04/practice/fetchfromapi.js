var axios = require("axios");

// axios.get(url).then(function(response){
//     console.log(response.data);
// }).catch(function(error){
//     console.log(error);
// })
// axios.get(url).then(response=>console.log(response.data)).catch(error=>console.log(error));

let url = "https://api.github.com/users/keenwarrior";
let url2 = "https://api.github.com/users/mr-robot-07";
axios.all([
    axios.get(url),
    axios.get(url2)
]).then(responseArr => {
    console.log(responseArr[0].data);
    console.log(responseArr[1].data);
})
    .catch(errors => {
        console.log(errors);
    })