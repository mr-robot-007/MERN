// 0 0 0 0 1 0 0 0 0
// 0 0 0 2 3 2 0 0 0
// 0 0 3 4 5 4 3 0 0
// 0 4 5 6 7 6 5 4 0
// 5 6 7 8 9 8 7 6 5

let n=5;
let row= 1;
while(row<=5)
{
    let col=n-row;
    while(col>0)
    {
        process.stdout.write("  ");
        col-=1;
    }
    col =row;
    while(col<row+row)
    {
        process.stdout.write(col+" ");
        col+=1;
    }
    col-=2;
    while(col>=row)
    {
        process.stdout.write(col+" ");
        col-=1;
    }

    process.stdout.write("\n");
    row+=1;
}