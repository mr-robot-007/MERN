let n = 4;
let row = 1;
while (row <= n) {
    let col = 1;
    while (col <= row) {
        process.stdout.write("*");
        col += 1;
    }
    row += 1;
    process.stdout.write("\n");
}