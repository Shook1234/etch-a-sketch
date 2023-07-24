/* below allows HTML to run first and then JS will load in after to avoid any errors in loading overlap*/

let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);

    document.querySelector("body").addEventListener("click", function(e){
        if (e.target.tagName != "BUTTON"){
            click = !click;
        }
    })

    let btn_popup = document.querySelector("#popup");
    btn_popup.addEventListener("click", function(){
        let size = getSize();
        createBoard(size);
    })
})

function createBoard(size) {
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div);
    }

}

function getSize(){
    let input = prompt("What is the board size?");
    if(input == "") {
        getSize();
    }
    else if (input < 0 || input > 100) {
        getSizeReprompt();
    } else {
        alert("Thanks! Now you can play.")
        return input;
    }
}

function getSizeReprompt(){
    let input = prompt("What is the board size? (Enter a number between 1 - 100)")
    if (input == "") {
        getSizeReprompt();
    }
    else if (input < 0 || input > 100) {
        getSizeReprompt();
    } else {
        alert("Thanks! Now you can play.")
        return input;
    }
}

function colorDiv() {
    if(click) {
        if(color == "rainbow") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice) {
    color = colorChoice;
}

function resetBoard() {
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}

function toggleClick() {
    click = !click; // Toggle the value of the click variable (true to false or false to true)
}