//LISTA COM AS CARTAS
let cartas = document.querySelectorAll(".carta");
lista_cartas = [...cartas];


//lista das cartas que vão aparecer na tela
lista_visiveis = []
//lista das cartas que estão viradas para cima
cartas_pra_cima = []


//loop parar  ficar dando prompt até o numero desejado ser 4 <= n <= 14 e par
do {
    n = prompt("Diga o numero o cartas");
} while (n < 4 || n > 14 || n % 2 == 1);

displaycartas(n)


function displaycartas(n) {
    //vai colocar n cartas na tela

    //loop para dar display nas n primeiras cartas da lista_cartas
    //e adicionar na lista_visiveis

    for (let i = 0; i < n; i++) {

        let butao = lista_cartas[i]
        butao.classList.remove("esconder")

        lista_visiveis.push(butao)

    }
}

//Não estou conseguindo mostrar elas de maneira aleatoria, só alterando a ordem da lista

//deixar a lista_visiveis aleatoria
function embaralhar(lista) {
    //loop na lista
    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    console.log(lista)
    return lista
}




//clicar na carta faz ela virar e troca a img pelo gif ou vice-versa
function clicarcarta(elemento) {


    const gif = elemento.querySelector(".carta  .gif")
    const imagem = elemento.querySelector(".carta  .imagem")

//condição para evitar bugs se o user clicar em uma carta que não está escondida
    if (gif.classList.contains("esconder")) {

        gif.classList.remove("esconder")
        imagem.classList.add("esconder")

        cartas_pra_cima.push(elemento)

        comparar();
    }

    //teste
    //console.log(`essa é a função clicar carta:\n ${cartas_pra_cima}`)

}



function fecharcarta(cartavirada) {

    const gif = cartavirada.querySelector(".carta  .gif")
    const imagem = cartavirada.querySelector(".carta  .imagem")

    gif.classList.add("esconder")
    imagem.classList.remove("esconder")

    cartas_pra_cima.pop()

    //teste
    //console.log(`essa é a função fechar carta:\n ${cartas_pra_cima}`)


}

function comparar() {

    if (cartas_pra_cima.length == 2) {
        //teste
        //console.log(`essa é a função comparar carta 1° if: \n ${cartas_pra_cima}`)

        if (cartas_pra_cima[0].querySelector('.gif img').src !=
            cartas_pra_cima[1].querySelector('.gif img').src) {

            //teste
            //console.log(`essa é a função comparar carta 2° if:\n ${cartas_pra_cima}`)
            fecharcarta(cartas_pra_cima[1])
            fecharcarta(cartas_pra_cima[0])


        } else {
            fim_de_jogo()
        }
        cartas_pra_cima.pop()
        cartas_pra_cima.pop()
        //teste
        //console.log(`essa é a função comparar carta depois dos ifs:\n ${cartas_pra_cima} `)

    }
}

// pq nao ta dando o alert?
function fim_de_jogo() {
    lista = []
    contador = 0
    //o erro supostamente esta aqui
    for (let i = 0; i < lista_visiveis.length; i++) {
        let resp = lista_visiveis[i].classlist.contains("esconder")
        lista.push(resp)

        //teste
        console.log(resp, lista)

    }
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] == false) {
            contador += 1
        }

        //teste
        console.log(contador, lista)

    }
    if (contador == lista_visiveis.length) {
        alert("Acabou! Parabens!")

        //teste
        console.log(resp, lista)
    } else {

        //teste
        console.log(resp, lista)
    }
}