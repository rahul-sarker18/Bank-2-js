 document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('gmail-input');
    const gmaiValue = email.value;

    const passwordEvent =document.getElementById('password-input');
    const password = passwordEvent.value;

    if(gmaiValue == 'rahul.com' ){
        console.log(gmaiValue);
       window.location.href ='./bank.html'
       
    }
    else{
        alert('plese valide your gmail')
    }
    
 })

