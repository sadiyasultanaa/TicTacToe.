let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#reset-button");
let newgame=document.querySelector("#new-gamebutton");
let msgconntainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg")
let turnO=true;// player 0
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];
const resetgame=()=>{
    turnO=true;
    
    enableboxes();
    msgconntainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
    box.disabled=true;
    checkWinner();
    });
});
const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};


const showWinner=(winner)=>{
    msg.innerText=`Congratulation,Winner is ${winner}`;
    msgconntainer.classList.remove("hide");
};
    const checkWinner=()=>{
        for(let pattern of winPatterns){
            
                let pos1Val=boxes[pattern[0]].innerText;
                let pos2Val=boxes[pattern[1]].innerText;
                let pos3Val=boxes[pattern[2]].innerText;

    
            if(pos1Val != "" && pos2Val != "" && pos3Val != "") {
                if(pos1Val===pos2Val && pos2Val===pos3Val){
                    disableboxes();
                    showWinner(pos1Val);
                }

            }

        }
    };
    newgame.addEventListener("click",resetgame);
    resetbutton.addEventListener("click",resetgame);