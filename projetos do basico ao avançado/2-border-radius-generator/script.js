
let box = document.querySelector('.box')
let borderCopy = document.querySelector('.bordercopy')
let button = document.querySelector('button')

let topRight = document.querySelector('[data-top-right]')
let topLeft = document.querySelector('[data-top-left]')
let bottonRight = document.querySelector('[data-botton-right]')
let bottonLeft = document.querySelector('[data-botton-left]')

let range = document.querySelectorAll('label input')

range.forEach((input)=>{
    input.value = 0
    borderCopy.value = `border-radius:${input.value}% ${input.value}% ${input.value}% ${input.value}% ${';'}`

    input.addEventListener('change', ()=>{
        
        box.style.borderRadius = `${topLeft.value}% ${topRight.value}% ${bottonLeft.value}% ${bottonRight.value}%`

        borderCopy.value = `border-radius:${topLeft.value}% ${topRight.value}% ${bottonLeft.value}% ${bottonRight.value}% ${';'}`
        
        
    })

})

button.addEventListener('click', ()=>{
    
    navigator.clipboard.writeText(borderCopy.value)
    alert(borderCopy.value)
})





























