let arr = [10, 20, 30, 40];

function square(item) {
    return item * item;
}
let out = arr.map(square);
console.log(out);

//with anonymous function
out = arr.map(function (item) {
    return item * item;
});

console.log(out);
// console.log(arr);