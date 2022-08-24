let billAmount = document.querySelector("#bill-amount");
let cashGiven = document.querySelector("#cash-given");
let checkButton = document.querySelector("#check-button");
let errorMessage = document.querySelector("#error-message");
let noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    let cashGivenNum = Number(cashGiven.value);
    let billAmountNum = Number(billAmount.value);
    console.log(billAmountNum);
    console.log(cashGivenNum);
    console.log(55);
    hideMessage();
    if (billAmountNum === 0 || cashGivenNum === 0) {
        showMessage("Enter valid inputs");
    } else {
        if (billAmountNum > 0) {
            if (cashGivenNum > billAmountNum) {
                const amountToBeReturned = cashGivenNum - billAmountNum;
                calculateChange(amountToBeReturned);
            } else if (cashGivenNum === billAmountNum) {
                showMessage("No cash to be given");
            } else {
                showMessage("Do you want to wash the plates?");
            }
        } else {
            showMessage("Enter a valid amount");
        }
    }
});

function calculateChange(amountToBeReturned) {
    for (let i = 0; i < availableNotes.length; i++) {
        let numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes; //2000, 500, 100, 20, 10, 5, 1
    }
}

function showMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function hideMessage(message) {
    errorMessage.style.display = "none";
}