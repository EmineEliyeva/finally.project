function toggleWatchDisplay(targetElement) {
    let myWatchRight = document.querySelector(".my-watch-right");
    let myWatchRightTwo = document.querySelector(".my-watch-right-two");

    if (targetElement.classList.contains('myWatch')) {
        myWatchRight.style.display = 'block';
        myWatchRightTwo.style.display = 'none';
    } else if (targetElement.classList.contains('watchBought')) {
        myWatchRightTwo.style.display = 'block';
        myWatchRight.style.display = 'none';
    }
}

document.addEventListener('click', function (e) {
    if (e.target.matches('.myWatch, .watchBought')) {
        e.preventDefault();
        toggleWatchDisplay(e.target);
    }
});
