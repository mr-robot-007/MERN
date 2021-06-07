//pseudocode
// a = num1;
//b = num2;
//i= 1;
// gcd = 1;
// if(a>b)
//     while (i<=b)
//         if(a%i==0 and b%i==0)
//             gcd *= i;
//         i++;
// else
//     while (i<=a)
//         if(a%i==0 and b%i==0)
//             gcd *= i;
//         i++;

//3. Write the pseudocode & the program to calculate GCD of two numbers.
let a= 6;
let b = 9;
let i=1;
let gcd = 1;
if(a>b)
{
    while(i<=b)
    {
        if((a%i==0) && (b%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
else
{
    while(i<=a)
    {
        if((a%i==0) && (b%i==0))
        {
            gcd *= i;
        }
        i+=1;
    }
}
console.log(gcd);