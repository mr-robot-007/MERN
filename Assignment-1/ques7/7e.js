let n=5;
let row=0;
let num;
//pascal triangle
function fact(n)
{
    if(n==1 || n==0)
    {
        return 1;
    }
    let ans=n*fact(n-1);
    return ans;
}
function binomial_coefficient(n,k)
{
    let coeff= fact(n)/(fact(k)*fact(n-k));
    return coeff;
}
while(row<=n)
{
    let col =1;
    process.stdout.write(col+" ");
    while(col<=row)
    {
        let ans=binomial_coefficient(row,col);
        process.stdout.write(ans+" ");
        col+=1;
    }
    console.log();
    row+=1;
}
