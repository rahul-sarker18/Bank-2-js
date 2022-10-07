document.getElementById('widthro-btn').addEventListener('click', function(){
    const widthroElemant =document.getElementById('widthro-input');
    const withderoString = widthroElemant.value;
    const newWithdroAmount = parseFloat(withderoString);
    if(isNaN(withderoString )){
        widthroElemant.value = '';
        alert('plise type amount')
        return 0;
    }
    
    widthroElemant.value = '';

    const withdroMOnyElemant = document.getElementById('withdro-mony');
    const withdroMOnyString = withdroMOnyElemant.innerText;
    const privasWithdroMony = parseFloat(withdroMOnyString);

    const totalWithdrow = newWithdroAmount + privasWithdroMony;
   

    const balanceElemant =document.getElementById('balance-elemant');
    const balanceElemantString =balanceElemant.innerText;
    const balanceTotal = parseFloat(balanceElemantString);

    if(balanceTotal >= newWithdroAmount  ){
        withdroMOnyElemant.innerText = totalWithdrow;
    }
    else{
        alert('tomar taka ni')
    }


    if(newWithdroAmount <= balanceTotal ){
        const allMony =balanceTotal - newWithdroAmount ;
        balanceElemant.innerText =allMony;
        
    }
})