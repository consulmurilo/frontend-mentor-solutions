const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    if (emailInput.value === '' || !emailValid(emailInput.value)) {
        document.querySelector('#email').style.borderColor = 'hsl(0, 93%, 68%)'
        document.querySelector('#erroricon').style.display = 'block'
        document.querySelector('#message').innerText = 'Please provide a valid email'
        return
    }

    form.submit()
})

function emailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)) {
        return true
    }

    return false
}