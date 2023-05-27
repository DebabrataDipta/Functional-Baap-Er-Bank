

document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputValueById('deposit-field');
    const previousDepositTotal=getInputTextValueById('deposit-total');
    const currentDepositTotal=newDepositAmount+previousDepositTotal;
    const previousSetDeposit=setElementValue('deposit-total',currentDepositTotal);


    const previousBalanceTotal=getInputTextValueById('balance-total');
    const currentBalanceTotal=previousBalanceTotal+currentDepositTotal;
    const setBalance=setElementValue('balance-total',currentBalanceTotal);
    // const balanceSet=document.getElementById('balance-total');
    // balanceSet.innerText=currentBalanceTotal;
    
})