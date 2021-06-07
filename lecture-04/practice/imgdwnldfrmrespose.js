let axios = require('axios');
let download = require('image-downloader');
// let readline = require('readline-sync');

let urlapi = "https://api.github.com/users/mr-robot-007";

axios.get(urlapi).then(
    response => {
        console.log(response.data.name);
        const options = {
            url: response.data.avatar_url,
            dest: './photos' + response.data.name + ".jpg"
        }
        download.image(options);
    }).catch(
        error => console.log(error)
    )