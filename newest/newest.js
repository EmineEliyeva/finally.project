function searchFunction() {
    var input, filter, ul, li, h2, price, i, txtValue, txtPrice;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('watchList');
    li = ul.getElementsByTagName('li');

    for (i = 0; i < li.length; i++) {
        h2 = li[i].getElementsByClassName('watch-title')[0];
        price = li[i].getElementsByClassName('watch-price')[0];
        if (h2 || price) {
            txtValue = h2.textContent || h2.innerText;
            txtPrice = price.textContent || price.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1 || txtPrice.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = '';
            } else {
                li[i].style.display = 'none';
            }
        }
    }
}

function sortByPrice() {
    var ul, li, switching, i, x, y, shouldSwitch;
    ul = document.getElementById("watchList");
    switching = true;
    while (switching) {
        switching = false;
        li = ul.getElementsByTagName("li");
        for (i = 0; i < (li.length - 1); i++) {
            shouldSwitch = false;
            x = li[i].getElementsByClassName("watch-price")[0].innerText.replace('$', '').trim();
            y = li[i + 1].getElementsByClassName("watch-price")[0].innerText.replace('$', '').trim();
            if (parseFloat(x) > parseFloat(y)) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
            switching = true;
        }
    }
}

function sortByName() {
    var ul, li, switching, i, x, y, shouldSwitch;
    ul = document.getElementById("watchList");
    switching = true;
    while (switching) {
        switching = false;
        li = ul.getElementsByTagName("li");
        for (i = 0; i < (li.length - 1); i++) {
            shouldSwitch = false;
            x = li[i].getElementsByClassName("watch-title")[0].innerText.toUpperCase();
            y = li[i + 1].getElementsByClassName("watch-title")[0].innerText.toUpperCase();
            if (x > y) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            li[i].parentNode.insertBefore(li[i + 1], li[i]);
            switching = true;
        }
    }
}