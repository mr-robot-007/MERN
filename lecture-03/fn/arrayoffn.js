let arr= [];
function hey(name)
{
    console.log("hurray "+ name);
}

arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(hey);
arr.push(function()
{
    console.log("hello")
});
arr[0]("harry");
console.log(arr); 