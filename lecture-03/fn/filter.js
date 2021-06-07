let arr = [10,21,30,40,"","happy"];

let out =arr.filter(function(item){
    return (item >=30);

});
out  =arr.filter(function(item){
    return (item%2)==0;

});
console.log(out);

console.log(!!null);