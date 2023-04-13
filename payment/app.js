let calc = document.getElementById('btn');
let msg = document.getElementById('info');
let result = "";
calc.addEventListener('click', ()=>{
    
    let bal = document.querySelector('.amount');
    let deb = document.getElementById('debit');
    let debit = deb.value;
    let bala = bal.textContent;
    let result=Number(bala)-Number(debit);
    msg.textContent = "You have been credited sum of "+debit+" out of your total Gratuity, your remaining ballance is "+result;
    bal.textContent = result;
    deb.value = "";
});
