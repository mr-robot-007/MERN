let name1 = "Anuj Gusain";
let days=10;
let count  =0;
let salutation = `Welcome ${name1}, you won package of ${days} days`;
console.log(salutation);
setInterval(function () {
    d.innerHTML = new Date();
    count +=10;
    console.log(count);
    count = count %256;
    console.log(count);
    d.style.color=`rgb(${count},${count},${count})`;
  }, 100);