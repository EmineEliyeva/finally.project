var clickCount = 0;

function showContRightTwo() {
    var contRightTwo = document.querySelector('.cont-right-two');
    var contacted = document.querySelector('.contacted');
    var oneContH2 = document.querySelector('.one-cont h2');

    if (clickCount == 0) {
        contRightTwo.style.opacity = '1';
        contRightTwo.style.visibility = 'visible';
        oneContH2.style.background = '#AE8A2B';
        oneContH2.style.color = '#fff';
        contacted.style.height = '1200px';
        clickCount++;
    } else {
        window.location.href = '/followed/followed.html'; 
    }
}

const fileUploadInputs = document.querySelectorAll('.img-one input[type="file"]');

fileUploadInputs.forEach(function(input) {
    input.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function() {
                const imgElement = input.parentNode.querySelector('img');
                imgElement.src = reader.result;
            }
        } else {
            alert('Lütfen bir resim dosyası seçin!');
        }
    });
});
