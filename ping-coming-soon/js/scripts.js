const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    if (emailInput.value === '' || !emailValid(emailInput.value)) {
        document.querySelector('#error').style.display = 'block'
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
        return
    }

    form.submit()
})

function emailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/
    )
    if (emailRegex.test(email)) {
        return true
    }

    return false
}