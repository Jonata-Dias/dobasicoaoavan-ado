
const string1 = document.querySelector('.string1')
const string2 = document.querySelector('.string2')
const operadores = document.querySelector('.operadores')
const button = document.querySelector('button')
const output = document.querySelector('.output')


const comparison = (valor1, valor2, operador)=>{
    

    if(valor1 ===  '' || valor2 === ''){
        return output.innerHTML = 'valor invalido.'
    }
    if(operador === '='){
        if( valor1 === valor2){
            return output.innerHTML = true
        } else{
            return output.innerHTML = false
        }
        
    }

    if(operador === '<'){
        if(valor1 < valor2){
           return output.innerHTML =  true
        } else {
            return  output.innerHTML = false
        }
    }

    if(operador === '>'){
        if(valor1 > valor2){
            return output.innerHTML =  true
         } else {
             return  output.innerHTML = false
         }
        
    }
   
}

button.addEventListener('click', ()=>{
    console.log(operadores.value)
    comparison(string1.value.toString(),string2.value.toString(), operadores.value)
    string1.focus()
    string1.value = ''
    string2.value = ''
})



