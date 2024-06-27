let bill = document.getElementById("billAmount");
let perc = document.getElementById("percentageTip");
let tip = document.getElementById("tipAmount");
let total = document.getElementById("totalAmount");
let error = document.getElementById("errorMessage");

function buttonCall() {
    if (bill.value == '') {
        error.textContent = "INVALID";
    } else if (perc.value == '') {
        error.textContent = "invalid";
    } else {
        error.textContent = ''
        let billam = parseInt(bill.value);
        let perct = parseInt(perc.value);
        let tipAmt = (perct / 100) * billam;
        let totals = billam + tipAmt;

        tip.value = tipAmt;
        total.value = totals;
    }
}