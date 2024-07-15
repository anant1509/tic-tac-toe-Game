let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let Msgcontainer = document.querySelector(".msg-container");
let MSG = document.querySelector("#msg");

let turno = true;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [2, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turno){
            box.innerText = "O";
             turno = false;
        }
        else{
            box.innerText = "X";
            turno = true;
        }
        box.disabled = true;
        checkWinner();
    });
});
const resetgame = () => {
    turno  = true;
    enabledboxes();
    Msgcontainer.classList.add("hide");
}

const disabledboxes = () =>{
    for(let box of boxes){
         box.disabled =true;
    }
}
const enabledboxes = () =>{
    for(let box of boxes){
         box.disabled =false;
         box.innerText = "";
    }
}
const showWinner = (winner) => {
    MSG.innerHTML = `Congratulations Winner is ${winner}`;
    Msgcontainer.classList.remove("hide");
    disabledboxes();
}

const checkWinner= (() => {
   for(let pattern of winpatterns){
            let pos1val =  boxes[pattern[0]].innerText;
            let pos2val =  boxes[pattern[1]].innerText;
            let pos3val =  boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val != ""){
             if(pos1val === pos2val && pos2val === pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
             }
        }
   }
});
newGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame)

