// Resim yükleme işlevi
function yukleResim(event) {
    var dosya = event.target.files[0];
    var resim = document.getElementById('uploaded-img-1');

    // Seçilen dosya bir resimse
    if (dosya && dosya.type.startsWith('image/')) {
        var okuyucu = new FileReader();

        // Dosya okunduğunda yapılacak işlemler
        okuyucu.onload = function(e) {
            resim.src = e.target.result;
        };

        // Dosyayı oku
        okuyucu.readAsDataURL(dosya);
    } else {
        alert("Lütfen bir resim dosyası seçin!");
    }
}


var dosyaInput = document.getElementById('img-upload-1');
dosyaInput.addEventListener('change', yukleResim);

// Sayfa yüklendiğinde veya resim değiştirildiğinde .img div'in boyutlarını al
window.addEventListener('DOMContentLoaded', function() {
    var imgDiv = document.querySelector('.img');
    var resim = imgDiv.querySelector('img');

    // Resmin yüklenmesini bekleyin ve sonra .img div'in boyutlarını ayarlayın
    resim.onload = function() {
        imgDiv.style.width = resim.offsetWidth + 'px';
        imgDiv.style.height = resim.offsetHeight + 'px';
    };
});

