let x = parseInt(lines.shift());
for (i = 0; i < 6;) {
    if (x % 2 !== 0) {
        console.log(x);
        i++;
    }
    x++;
}