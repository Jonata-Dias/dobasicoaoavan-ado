
const textAreaCSV = document.querySelector('#csv')
const textAreaJSON = document.querySelector('#json')

const btnJSON = document.querySelector('#btn-json')
const btnCSV = document.querySelector('#btn-csv')
const limpar = document.querySelector('#limpar')

btnJSON.addEventListener('click', ()=>{//JSON.parse(textAreaCSV.value) 
    textAreaJSON.value  = CSVToJSON()           
    
})

limpar.addEventListener('click', ()=>{
    textAreaJSON.value = textAreaCSV.value = ''
})





     const CSVToJSON = () => {
        const lines = textAreaCSV.value.split('\n\r');
        const keys = lines[0].split(',');
        return lines.slice(1).map(line => {
            return line.split(',').reduce((acc, cur, i) => {
                const toAdd = {};
                toAdd[keys[i]] = cur;
                return { ...acc, ...toAdd };
            }, {});
        });
    };
  
    const exampleCSV = `
            date,positives,fatalities
            20210307,28756184,515148
            20210306,28714654,514309
            20210305,28654639,512629
            20210304,28585852,510408
            20210303,28520365,508665
            20210302,28453529,506216
            20210301,28399281,504488`;
    console.log(CSVToJSON(exampleCSV));















