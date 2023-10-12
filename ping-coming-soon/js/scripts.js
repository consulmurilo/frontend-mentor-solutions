const form = document.querySelector('#form')
const emailInput = document.querySelector('#email')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    if (emailInput.value === '' || !emailValid(emailInput.value)) {
        form.style.rowGap = '2rem'
        document.querySelector('#error').style.display = 'block'
        emailInput.style.borderColor = 'hsl(354, 100%, 66%)'
        document.querySelector('#dashboard').style.bottom = '5%'
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