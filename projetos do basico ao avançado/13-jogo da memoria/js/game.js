
const grid = document.querySelector('.grid')

let fistCard = ''
let secondCard = ''

const caracteres = [
    'beth',
    'jerry',
    'jessica',
    'meeseeks',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'scroopy',
    'summer'
]

const checkCards = ()=>{
    const fistCaracter = fistCard.getAttribute('data-caracter')
    const secondCaracter = secondCard.getAttribute('data-caracter')

    if(fistCaracter === secondCaracter){
        fistCard.firstChild.classList.add('disabledCard')
        secondCard.firstChild.classList.add('disabledCard')
    } else {
        setTimeout(()=>{
            fistCard.classList.remove('revealCard')
        secondCard.classList.remove('revealCard')
        fistCard = ''
        secondCard = ''
        }, 500)      
    }
}

const createElementHtml = (tagName, elementClass)=>{
    const element = document.createElement(tagName)
    element.classList = elementClass
    return element
}

const revealCard = ({ target })=>{
    
    if(target.parentNode.className.includes('revealCard')){
        return
    }

    if(fistCard === ''){
        target.parentNode.classList.add('revealCard') 
        fistCard = target.parentNode 
    } else if(secondCard === ''){
        target.parentNode.classList.add('revealCard') 
        secondCard = target.parentNode 

        checkCards()
    }
    
}

const createCard = (caracter)=>{

    const card = createElementHtml('div', 'card')
    const front = createElementHtml('div', 'face front')
    const back = createElementHtml('div', 'face back')

    front.style.backgroundImage = `url('../images/${caracter}.png')`
    
    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    card.setAttribute('data-caracter', caracter)

    return card
}

const loadGame = ()=>{

    const duplicateCaracteres = [...caracteres, ...caracteres]

    const shuffledArray = duplicateCaracteres.sort(()=>Math.random() - 0.5)
    
    shuffledArray.forEach(caracter => {
        const card = createCard(caracter)
        grid.appendChild(card)
    });
}

loadGame()













