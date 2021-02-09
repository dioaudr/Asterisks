let rows1 = 5;
for(let i = 1; i <= rows1; i++){
    console.log("*");
}


let rows2 = 5;
for(let i = 0; i < rows2; i++){
    tampung = "";
for(let j = 0; j <= rows2; j++){
    tampung += "*";
}
console.log(tampung)
}

let rows3 = 5;
for(let i = 0; i < rows3; i++){
    tampung = "";
for(let j = 0; j <= i; j++){
    tampung += "*";
}
console.log(tampung)
}


let rows4 = 5;
for(let i = 0; i < rows4; i++){
    tampung = "";
for(var j = i; j < rows4; j++){
    tampung += "*";
}
console.log(tampung)
} 

var kata = "hacktiv8" 

for(var i = 0; i < kata.length; i++) {
    var temp = "";
    for(var j = 0; j < kata.length - i; j++) {
        if(i === j) {
            temp += kata[i]
        }else {
            temp += " "
        }
    }
    console.log(temp + kata[i]);
}

// do loops using rows1 variable to display asterisks in the console.
// do loops using rows2 variable to display asterisks in the console.
// do loops using rows3 variable to display asterisks in the console.
// do loops using rows4 variable to display asterisks in the console.
