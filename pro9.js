function calculate(){
    const loanamount = parseFloat(document.getElementById("loanamountip").value);
    const interestrate = parseFloat(document.getElementById("interestrateip").value);
    const loanterm = parseFloat(document.getElementById("loantermip").value);

    if(isNaN(loanamount)|| isNaN(interestrate)||isNaN(loanterm)){
        showError('Please enter valid number for all fields');
        return;
    }

    const monthlyinterest = interestrate/100/12;
    const totalpayment = loanterm;
    const monthlypayment = (loanamount*monthlyinterest)/(1-Math.pow(1+monthlyinterest,-totalpayment));
    const totalinterest = (monthlypayment*totalpayment)-loanamount;
    displayResult(monthlypayment,totalinterest);
}

function displayResult(monthlypayment,totalinterest){
    const result = document.getElementById("result");
    result.innerHtml = `
    <p><strong>Monthly Payment: ${monthlypayment.toFixed(2)}</strong></p>
    <p><strong>Total Interest: ${totalinterest.toFixed(2)}</strong></p>
    `;
}

function showError(message){
    const result = document.getElementById("result");
    result.innerHTML = `<p class="error">${message}</p>`;
}

document.getElementById("calculatebt").addEventListener('click',calculate);