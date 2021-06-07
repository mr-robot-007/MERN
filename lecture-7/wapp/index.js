// console.log("hello");
let axios = require('axios');

//await should be used with async function(in which promise is returned), we don't need to use then and catch if we use await


async function sayHi() {
    console.log("ye chlega phle");
    let res = await axios.get("https://api.github.com/users/keenwarrior");
    console.log("ye chlega badme");
    return res.data.login;
    // res.then(function (out) {
    //     console.log(out.data.login);
    // })
}

sayHi().then (out=>console.log(out));
console.log("yayyyyyy");