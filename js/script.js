// Looping a triangle excersize

function triangle () {
    for (let number = "#"; number.length <= 7; number += "#") {
        console.log(number);
    }
}

// triangle()


// FizzBuzz excersize

function fizzBuzz () {
    for (let i = 0; i <= 100; i++) {

        if (i % 15 == 0) {
            console.log("FizzBuzz");
        }
        else if (i % 3 == 0) {
            console.log("Fizz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else {
            console.log(i)
        }
    }
}

// fizzBuzz()

// Chessboard 

function chessboard(){
    // let x = " " + "#" +  " "  + "#" +  " "  + "#" + " " + "#" + " " + "\n"
    // let y = "#" + " " +  "#"  + " " +  "#"  + " " + "#" + " " 
    // console.log(x + y);

    let x = " "
    let y = "#"
    
    for (let x = 0; x <= 7; x += y){
        console.log(x)
    }
}

chessboard()

