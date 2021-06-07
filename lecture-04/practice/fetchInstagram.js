const axios = require('axios');
let download = require('image-downloader');
let readlineSync =  require('readline-sync');
let username = readlineSync.question("Enter instagram username : ");
let urlapi = 'https://www.instagram.com/' +username + '/?__a=1';
axios.get(urlapi).then(
    response => {
        console.log(response.data.graphql.user.profile_pic_url);
        const options = {
            url: response.data.graphql.user.profile_pic_url,
            dest: './photos' + username+ ".jpg"
        }
        download.image(options);
    }).catch(
        error => console.log(error)
    )