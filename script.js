const itens = //Cuidado com as virgulas!!!!!!!!!
[
    {
        nome: "Igor",
        idade: 27
    },
    {
        nome: "Ednaldo Pereira",
        idade: 8001
    },
    {
        nome: "Lucas",
        idade: 15
    },
    {
        nome: "Xandão",
        idade: 900
    }
];

//Passaremos as informações como string
const lista = document.getElementById("lista");
const data = document.getElementById("data");

lista.style.fontFamily = "Comic Sans MS";

function search() {
    lista.innerHTML = "";
    for (let i = 0; i < itens.length; i++) {

        if(itens[i].idade >= data.value){
            lista.innerHTML += 
            `
            <li>
                <p> Nome: ${itens[i].nome} </p>
                <p> Idade: ${itens[i].idade} </p>
            </li
            `;
        }
    }
}

