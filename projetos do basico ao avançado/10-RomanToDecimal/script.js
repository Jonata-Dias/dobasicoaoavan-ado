const input = document.querySelector('input')
const button = document.querySelector('button')
const outPut = document.querySelector('.outPut')




const toDecimal = (number)=>{
    if(number > 3999 || number < 1){
        return outPut.innerHTML = 'Número invalido. Digite um número entre 1 e 3999.'
    }
    let m = ["", "M", "MM", "MMM"];

    let c = ["", "C", "CC", "CCC", "CD", "D",
            "DC", "DCC", "DCCC", "CM"
        ];
    let x = ["", "X", "XX", "XXX", "XL", "L",
                "LX", "LXX", "LXXX", "XC"
            ];
    let i = ["", "I", "II", "III", "IV", "V",
            "VI", "VII", "VIII", "IX"
        ];
         
    // Converting to roman
    let thousands = m[Math.floor(number/1000)];
    
    let hundreds = c[Math.floor((number%1000)/100)];
    
    let tens = x[Math.floor((number%100)/10)];
    
    let ones = i[number%10];
         
    let ans = thousands + hundreds + tens + ones;
     
    return outPut.innerHTML = ans 
    
}

button.addEventListener('click', (e)=>{
    
   toDecimal(input.value.toUpperCase())
   input.focus()
   input.value = ''
})

/*
 
// Function to convert decimal to Roman Numerals
function printRoman(number)
{
    let num = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    let sym = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];
    let i=12;
    while(number>0)
    {
        let div = Math.floor(number/num[i]);
        number = number%num[i];
        while(div--)
        {
            document.write(sym[i]);
        }
        i--;
    }
}
 
//Driver program
 
    let number = 3549;
 
    printRoman(number);
*/

/*
 
// Function to calculate roman equivalent
function intToRoman(num)
{
    // storing roman values of digits from 0-9
    // when placed at different places
    let m = ["", "M", "MM", "MMM"];
    let c = ["", "C", "CC", "CCC", "CD", "D",
                        "DC", "DCC", "DCCC", "CM"];
    let x = ["", "X", "XX", "XXX", "XL", "L",
                        "LX", "LXX", "LXXX", "XC"];
    let i = ["", "I", "II", "III", "IV", "V",
                        "VI", "VII", "VIII", "IX"];
         
    // Converting to roman
    let thousands = m[Math.floor(num/1000)];
    let hundereds = c[Math.floor((num%1000)/100)];
    let tens = x[Math.floor((num%100)/10)];
    let ones = i[num%10];
         
    let ans = thousands + hundereds + tens + ones;
         
    return ans;
}
 
// Driver program to test above function
 
    let number = 3549;
    document.write(intToRoman(number));
     
 
//This code is contributed by Mayank Tyagi
</script>
*/ 



/*
if(letra === '' || letra !== 'I' || letra !== 'V' || letra !== 'X' ||
     letra !== 'L' || letra !== 'C' || letra !== 'D' || letra !== 'M' ){
        outPut.innerHTML = 'Digite um númeo rômano válido.'
    }
    if(letra === 'I'){
        outPut.innerHTML = `I = ${I}` 
    }
    if(letra === 'II'){
        outPut.innerHTML = `II = ${II}` 
    }
    if(letra === 'III'){
        outPut.innerHTML = `III = ${III}` 
    }
    if(letra === 'V'){
        outPut.innerHTML = `V = ${V}` 
    }
    if(letra === 'X'){
        outPut.innerHTML = `X = ${X}` 
    }
    if(letra === 'L'){
        outPut.innerHTML = `L = ${L}` 
    }
    if(letra === 'C'){
        outPut.innerHTML = `C = ${C}` 
    }
    if(letra === 'D'){
        outPut.innerHTML = `D = ${D}` 
    }
    if(letra === 'M'){
        outPut.innerHTML = `M = ${M}` 
    }
*/ 