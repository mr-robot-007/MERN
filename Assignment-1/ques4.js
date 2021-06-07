
//Write a program to print even numbers after odd times jump.E.g: 2, 6, 14, 26, ...
let a=2;
let b=1;
while(a<100)
{
    console.log(a+" ");
    a=a+(4*b);
    b+=1;
}

