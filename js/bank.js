document.getElementById('depojit-btn').addEventListener('click', function(){
    const depojitInputElemant =document.getElementById('depojit-input');
    const depojitstring = depojitInputElemant.value;
    const newDepojit = parseFloat(depojitstring);
    if(isNaN(depojitstring)){
        depojitInputElemant.value ='';
        alert('plise type amount')
        return 0;
    }
    depojitInputElemant.value ='';

    const depojitTotalElemant =document.getElementById('depojitTotal-Elemant');
    const depojitTotalString = depojitTotalElemant.innerText;
    const privasDepojit = parseFloat(depojitTotalString);

    const totalWithdrowMony = newDepojit + privasDepojit;
    depojitTotalElemant.innerText = totalWithdrowMony;

    const balanceElemant =document.getElementById('balance-elemant');
    const balanceElemantString =balanceElemant.innerText;
    const balanceTotal = parseFloat(balanceElemantString);

    const totalMony =newDepojit + balanceTotal;
    balanceElemant.innerText = totalMony;
})