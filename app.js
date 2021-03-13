let friends = ["Lucky", "Amos", "Tajan", "Iliya", "Alice"];

for (let i = 0; i < friends.length; i++){
    let friend = friends[i]; 

    for (let num = 99; num > 0; num--) {
        let oneLess = num - 1;
        if (num > 1) {
            console.log(num + " lines of code in the file, " + num + " lines of code; " + friend + " strikes one out, clears it all out, " + oneLess + " lines of code in the file");
        } else {
            console.log("1 line of code in the file, 1 line of code; " + friend + " strikes one out, clears it all out, no more lines of code in the file");
        }
    }
};
