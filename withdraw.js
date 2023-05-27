

document.getElementById('btn-withdraw').addEventListener('click',function(){
     const currentWithdraw=getInputValueById('withdraw-field');
     
     const previousWithdrawAmount=getInputTextValueById('withdraw-total');
     const currentWithdrawBalance=currentWithdraw+previousWithdrawAmount;
     const getElement=setElementValue('withdraw-total',currentWithdrawBalance);

    
//    setId.innerText=currentWithdrawBalance;
    const previousBalanceTotal=getInputTextValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal-currentWithdraw;
    const setNewBalance=setElementValue('balance-total',newBalanceTotal);
 
})