//LISTA COM AS CARTAS
let cartas = document.querySelectorAll(".carta");
let lista_cartas = [...cartas];

//lista das cartas que vão aparecer na tela
let lista_visiveis = []
//lista das cartas que estão viradas para cima
let cartas_pra_comparar = []

//lista das cartas que foram acertadad
let cartas_acertou = []

//contador de clicadas
let contar_clicadas = 0;


//loop parar  ficar dando prompt até o numero desejado ser 4 <= n <= 14 e par
function comecar() {

    contar_clicadas = 0;

    do {
        n = prompt("Diga o numero o cartas");
    } while (n < 4 || n > 14 || n % 2 == 1);

    displaycartas(n)
}

comecar()

function displaycartas(n) {
    //vai colocar n cartas na tela, removendo a classe esconder

    for (let i = 0; i < n; i++) {
        let butao = lista_cartas[i]
        lista_visiveis.push(butao)

        butao.classList.remove("esconder")

    }

    //teste
    //console.log(lista_visiveis)

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

        //colcoar na lista de cartas_pra_compoar
        cartas_pra_comparar.push(elemento)

        //comparar as cartas depois de um 1,5s
        setTimeout(comparar, 1500)

    }

    contar_clicadas += 1;

    //teste
    //console.log(`essa é a função clicar carta:\n ${cartas_pra_comparar}`)

}


//função para virar de volta as cartas caso estejam erradas
//pq nao ta definido?
function fecharcarta(cartavirada) {

    //teste
    //console.log(`assim que chamar, mostre isso:${cartavirada}`)

    const gif = cartavirada.querySelector(".carta  .gif")
    const imagem = cartavirada.querySelector(".carta  .imagem")

    gif.classList.add("esconder")
    imagem.classList.remove("esconder")

    cartas_pra_comparar.pop()

    //teste
    //console.log(`essa é a função fechar carta:\n ${cartas_pra_comparar}`)


}

//uma vez que viramos duas cartas, é preciso compará-las 
function comparar() {

    if (cartas_pra_comparar.length == 2) {
        //teste
        //console.log(`essa é a função comparar carta 1° if: \n ${cartas_pra_comparar}`)

        if (cartas_pra_comparar[0].querySelector('.gif img').src !=
            cartas_pra_comparar[1].querySelector('.gif img').src) {

            //teste
            //console.log(`essa é a função comparar carta 2° if:\n ${cartas_pra_comparar}`)
            fecharcarta(cartas_pra_comparar[1])
            fecharcarta(cartas_pra_comparar[0])


        } else {
            cartas_acertou.push(cartas_pra_comparar[1])
            cartas_acertou.push(cartas_pra_comparar[0])
            fim_de_jogo()
        }
        cartas_pra_comparar.pop()
        cartas_pra_comparar.pop()
        //teste
        console.log(`essa é a função comparar carta depois dos ifs:\n ${cartas_pra_comparar} `)

    }
}

//final do jogo, quando todas as cartas foram acertada
function fim_de_jogo() {
    if (cartas_acertou.length == lista_visiveis.length) {
        alert(`Você ganhou em ${contar_clicadas} jogadas!`)

        //teste
        console.log(lista_visiveis)

    }
}
