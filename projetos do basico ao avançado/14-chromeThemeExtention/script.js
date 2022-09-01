const input = document.querySelector('#text')
const btn = document.querySelector('button')
const result = document.querySelector('.result')


document.addEventListener('DOMContentLoaded', ()=>{


    btn.addEventListener('click', ()=>{
        result.innerHTML = upper(input.value)
    })

    const upper = (text)=>{
        return text.toUpperCase()
    }



})











