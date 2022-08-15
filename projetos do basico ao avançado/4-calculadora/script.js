//initial deta
const numbers = document.querySelectorAll('.numero')
const display = document.querySelector('#display')
const clear = document.querySelector('.limpar')

const operator = document.querySelector('.operator')

const igual = document.querySelector('.igual')


clear.addEventListener('click',()=>{
    display.innerHTML = 0
})

const showNumber = ()=>{
    display.innerHTML = numbers.innerText
}

numbers.addEventListener('click', showNumber)



