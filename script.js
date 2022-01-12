//references
let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkBtn = document.querySelector("#check");
let errorh3 = document.querySelector(".error");
let noOfNotes = document.querySelectorAll(".no-of-notes");


//event handling
checkBtn.addEventListener("click", handleCheckClick);


//functions
errorh3.style.display = "none";
function handleCheckClick(){
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            errorh3.style.display = "block";
            errorh3.textContent = "success";
            errorh3.style.backgroundColor = "#11ff44";
            let amountToReturn = cashGiven.value - billAmount.value;
            notesReturned(amountToReturn);
        }else{
            errorh3.style.display = "block";
            errorh3.textContent = "Aaahh.. want to wash the plates na..🧺";
        }
    }else{
        errorh3.style.display = "block";
        errorh3.textContent = "Invalid Amount"
    }
}

let notes = [2000, 500, 100, 20, 10, 5, 1];
function notesReturned(amountToReturn){
    let note;
    for(let i = 0; i < notes.length && amountToReturn > 0; i++){
        note = Math.floor(amountToReturn / (notes[i]));
        noOfNotes[i].innerText = note;
        amountToReturn %= notes[i];
    }
}

