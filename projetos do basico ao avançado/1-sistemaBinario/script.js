
let binario = document.querySelector('.binario')
let decimal = document.querySelector('.decimal')
let converter = document.querySelector('.converter')

let limpar = document.querySelector('.limpar')

function validadorBinario(){
    if( isNaN(binario.value) ){
        binario.value = 'Insira um valor valido'       
        binario.style.border = '2px solid #f00'        
        decimal.innerText = 'Numero invalido.'        
    } 
}

converter.addEventListener('click', ()=>{
    validadorBinario()
    let inputToNumber = Number.parseInt(binario.value, 10)
    
    let resultadoBinario =  inputToNumber.toString(2)
    
    decimal.innerHTML = resultadoBinario
    
})

//let inputToNumber = parseInt(binario.value)
//    let bin = inputToNumber.toString(2)

limpar.addEventListener('click', ()=> {
    binario.value = ''
    binario.style.border = '#000'
    decimal.innerHTML = ''
})






