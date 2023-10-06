let shareButton = document.querySelector('.share')
let popUp = document.querySelector('.popup')

shareButton.addEventListener('click', function () {
    if (popUp.style.display === 'none' || popUp.style.display === '') {
        popUp.style.display = 'block'
        shareButton.style.backgroundImage = 'url(images/icon-share-2.svg)'
        shareButton.style.backgroundColor = 'var(--desaturadoblue)'
    } else {
        popUp.style.display = 'none'
        shareButton.style.backgroundImage = 'url(images/icon-share.svg)'
        shareButton.style.backgroundColor = 'var(--lightgrayblue)'
    }
})