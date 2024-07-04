document.querySelector('.enter').addEventListener('click', function(e){
    e.preventDefault();
    const allInputs = document.querySelectorAll('.inputs input');
    let isValid = true;
    allInputs.forEach(input =>{
        if(input.value.trim() === ''){
            isValid = false;
            const errorSpan = input.nextElementSibling
            input.style.borderColor = 'red';
        }
    });
    if (isValid) {
        window.location.href = '/secandPage/secondPage.html';
      }

})