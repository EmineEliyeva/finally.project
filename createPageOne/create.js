document.querySelector('.next').addEventListener('click', function(e){
    e.preventDefault();
    const allInputs = document.querySelectorAll('.inputs input');
    let isValid = true;
    allInputs.forEach(input =>{
        if(input.value.trim() === ''){
            isValid = false;
            const errorSpan = input.nextElementSibling
            input.style.borderColor = 'red';
            if (input.type === 'tel') {
                errorSpan.textContent = 'Please enter a phone number';
              } else if (input.type === 'password') {
                errorSpan.textContent = 'Please enter a password';
              } 
        }
    });
    if (isValid) {
        window.location.href = '/createPageTwo/createPageTwo.html';
      }

})
