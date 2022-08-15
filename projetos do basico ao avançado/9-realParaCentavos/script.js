
const input = document.querySelector('input')
const button = document.querySelector('button')
const result = document.querySelector('div')
const coinsResult = document.querySelector('.coins')


const toCents = ()=>{
  let cents =  (parseFloat(input.value) *100).toFixed(0); 
  result.innerText = `valor em centavos: ${cents}`

  let cinquenta = 0
  if(cents >= 50){
     cinquenta = parseInt(cents / 50) 
      cents = cents % 50
  }


  let vinteCinco = 0
  if(cents >= 25){
    vinteCinco = parseInt(cents / 25) 
    cents = cents % 25
  } else{
    vinteCinco = 0
  }  

  let dez = 0
  if(cents >= 10){
    dez = parseInt(cents / 10) 
    cents = cents % 10
  }

  let cinco = 0
  if(cents >= 5){
    cinco = parseInt(cents / 5) 
    cents = cents % 5
  }
  let cent = cents
  coinsResult.innerText = `moedas de cinquenra centavos: ${cinquenta}
  moedas de 25 centavos: ${vinteCinco}
  moedas de 10 centavos: ${dez}
  moedas de 5 centavos: ${cinco}
  moedas de 1 centavo: ${cent}
  `
  
}


button.addEventListener('click', ()=>{
    toCents()
})



























var formatDollarsToCents = function(value) {
    value = (value + '').replace(/[^\d.-]/g, '');
    if (value && value.includes('.')) {
      value = value.substring(0, value.indexOf('.') + 3);
    }
  
    return value ? Math.round(parseFloat(value) * 100) : 0;
  }



var formatCentsToDollars = function(value) {
    value = (value + '').replace(/[^\d.-]/g, '');
    value = parseFloat(value);
    return value ? value / 100 : 0;
  }



