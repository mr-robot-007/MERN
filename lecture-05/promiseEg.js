let axios = require('axios');
let url = "https://api.github.com/users/keenwarrior";
// axios.get(url).then(response=>console.log(response.data)).catch(error=>console.log(error));



function orderSamosa() {
    let abc = axios.get(url);
    const samosaPromise = new Promise((resolve, reject) => {
        setTimeout(() => resolve(abc), 1000);
        setTimeout(() => reject('khtm hogaya'), 2000)   
    })
    return samosaPromise;

}
let pr = orderSamosa();
pr.then(responsefromabove => console.log(responsefromabove)  //when resolve then is executed
).catch(error => console.log(error));           //when rejected then is executed
console.log('Ordered samosa');