let a=5;
let row=1;
while(row <=a)
{
    let col=1;
    while(col<=row)
    {
        process.stdout.write(col+" ");
        col+=1;
    }
    row+=1;
    process.stdout.write("\n");
}