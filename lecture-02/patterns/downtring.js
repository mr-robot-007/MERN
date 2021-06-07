let n = 4;
let row = 0;
while (row < n) {
    let col = 0;
    while (col <n-row) {
        process.stdout.write((col+1)+" ");
        col += 1;
    }
    row += 1;
    process.stdout.write("\n");
}