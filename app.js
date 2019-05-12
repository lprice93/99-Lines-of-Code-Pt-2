let friends = ["Halle", "Jasmine", "Kimani", "Haily", "Jalon"];

for (let x = 0; x < friends.length; x++) {
    for (let i = 99; i > 0; i--) {
        if (i > 1) {
            console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file ");
        } else if (i = 1) {
            console.log(i + " line of code in the file, " + i + " line of code; " + friends[x] + " strikes one out, clears it all out, no more lines of code in the file ");
        } else {
            console.log(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes them out, clears it all out, no more lines of code in the file ");
        }
    }
}

// https://www.digitalocean.com/community/tutorials/how-to-construct-for-loops-in-javascript