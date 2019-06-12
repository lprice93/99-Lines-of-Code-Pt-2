let btn = document.getElementsByClassName("sing");
btn[0].addEventListener('click', function () {

    let friends = ["Halle", "Jasmine", "Kimani", "Haily", "Jalon"];

    for (let x = 0; x < friends.length; x++) {
        let div = document.createElement('div');
        div.className = 'friend';
        document.body.appendChild(div);
        console.log(friends[x]);

        let h3 = document.createElement('h3');
        let h3Text = document.createTextNode(friends[x]);
        h3.append(h3Text);
        div.appendChild(h3);


        for (let i = 99; i > 0; i--) {

            let p = document.createElement('p');
            let pText;

            if (i === 2) {
                pText = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i - 1) + " line of code in the file ");
            } else if (i === 1) {
                pText = document.createTextNode(i + " line of code in the file, " + i + " line of code; " + friends[x] + " strikes them out, clears it all out, no more lines of code in the file ");
            } else {
                pText = document.createTextNode(i + " lines of code in the file, " + i + " lines of code; " + friends[x] + " strikes one out, clears it all out, " + (i - 1) + " lines of code in the file ");
            }

            p.append(pText);
            div.appendChild(p);

        }
    }
});