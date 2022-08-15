let dadosPessoais = [
    {
        nome:'Jonata',
        sobrenome:'Dias',
        endereço:'Rua: 1, Qd:1, Lt: 1',
        telefone:'(99)99999-9999',
        dataDeNascimento:'20-05-1995'
    },
    {
        nome:'Marcos',
        sobrenome:'Silva',
        endereço:'Rua: 2, Qd:2, Lt: 2',
        telefone:'(99)99999-9999',
        dataDeNascimento:'01-02-1970'
    },
    {
        nome:'Luna',
        sobrenome:'Souza',
        endereço:'Rua: 7, Qd:5, Lt: 90',
        telefone:'(99)99999-9999',
        dataDeNascimento:'12-01-1964'
    },
    {
        nome:'Juliana',
        sobrenome:'Ferraz',
        endereço:'Rua: 90, Qd:57, Lt: 10',
        telefone:'(99)99999-9999',
        dataDeNascimento:'14-12-2000'
    }
]

const button = document.querySelector('.button')
const completeInformation = document.querySelector('.informacaocompleta')

const renderPerson = (person) => {
    console.log(person)
    const template = document.querySelector("#person-template").content;
    const item = template.cloneNode(true);
    const listItem = document.createElement("li");
    //listItem.classList.add('informacaocompleta')
  
    const summary = item.querySelector("summary");
    const name = item.querySelector("h1");
    const birthdate = item.querySelector("p");
    const address = item.querySelector(".address");
    const phone = item.querySelector(".phone");
  
    summary.innerText = person.nome;
    name.innerText = `${person.nome} ${person.sobrenome}`;
    birthdate.innerText = person.dataDeNascimento;
    address.innerText = person.endereço;
    phone.innerText = person.telefone;
  
    listItem.append(item);
    return listItem;
  };
  const renderList = (list, container) => {
    container.innerHTML = "";
    container.append(...list.map(renderPerson));
  };

  renderList(dadosPessoais, document.querySelector("#lista"));

button.addEventListener('click', ()=>{
    completeInformation.style.display = 'none'
        button.style.display = 'none'
})
















