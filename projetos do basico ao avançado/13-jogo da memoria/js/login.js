
const input = document.querySelector('.login-input')
const button = document.querySelector('.login-button')
const form = document.querySelector('form')

const validateInput = ({ target })=>{
    if(target.value.length > 2 && target.value.length <= 15){
        return button.removeAttribute('disabled')
    } 
    button.setAttribute('disabled', '')
}

const handleSubmit = (event)=>{
    event.preventDefault()

    localStorage.setItem('player', input.value)
    window.location = '../pages/game.html'
}

input.addEventListener('input', validateInput)
form.addEventListener('submit', handleSubmit)



