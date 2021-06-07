function happy(seconds) {
    console.log("I am happy " + seconds + " seconds");
}
let another = function (seconds) {
    console.log("I am happy " + seconds + " seconds");
}
// happy(4);
// for(let i =0; i<10;i++)
// {

// }
another(6);
setTimeout(function () {
    happy(2)
}, 2000);