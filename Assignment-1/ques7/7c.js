let n=5;
let row=1;
while(row<=n){
    let col =1;
    let a =n-row;
    while(a>0)
    {
        process.stdout.write("  ");
        a-=1;
    }
    while(col<=row)
    {
        process.stdout.write(col+" ");
        col+=1;
    }
    col-=2;
    while(col>0)
    {
        process.stdout.write(col+" ");
        col-=1;
    }
    process.stdout.write("\n");
    row+=1;
}



// 0 0 0 0 1 0 0 0 0 
// 0 0 0 1 2 1 0 0 0 
// 0 0 1 2 3 2 1 0 0
// 0 1 2 3 4 3 2 1 0
// 1 2 3 4 5 4 3 2 1