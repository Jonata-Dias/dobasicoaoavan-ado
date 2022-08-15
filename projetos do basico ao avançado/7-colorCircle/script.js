
const button = document.querySelector('button')
const input1 = document.querySelectorAll('input')[0]
const input2 = document.querySelectorAll('input')[1]
const input3 = document.querySelectorAll('input')[2]
const colorDiv = document.querySelector('.color')

input1.value = input2.value = input3.value  = 0

let interval;

const changeColor = ()=>{   
    if(input1.value > 255 || input2.value > 255 || input3.value > 255){
        input1.value = input2.value = input3.value  = 255
    } 
    if(input1.value < 0 || input2.value < 0 || input3.value < 0){
        input1.value = input2.value = input3.value  = 0
    }
    
    if(input1.value < 255 || input2.value < 255 || input3.value < 255){
        colorDiv.style.backgroundColor = `rgb(${input1.value++ },${input2.value},${input3.value})`  
    }          
            
}
const btnText = ()=>{
    if(button.innerText === 'START'){
        button.innerText = 'STOP'
        interval = setInterval(changeColor, 100) 
    } else {
        button.innerText = 'START'
        clearInterval(interval)
        //interval = null
        input1.value = input2.value = input3.value  = 0
    }
}

button.addEventListener('click',()=>{    
    btnText()

})









