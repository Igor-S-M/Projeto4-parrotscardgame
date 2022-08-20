//LISTA COM AS CARTAS
let cartas = document.querySelectorAll(".carta");
lista_cartas = [...cartas];

lista_visiveis = []
cartas_pra_cima = []

//loop parar  ficar dando prompt até o numero desejado ser 4 <= n <= 14 e par
do {
    n = prompt("Diga o numero o cartas");
} while (n < 4 || n > 14 || n % 2 == 1);
displaycartas(n)


function displaycartas(n){

    for (let i=0; i<n; i++){

        let butao = lista_cartas[i]
        butao.classList.remove("esconder")

        lista_visiveis.push(butao)

}
}



//clicar na carta faz ela virar e troca a img pelo gif ou vice-versa
function clicarcarta(elemento){


    const gif = elemento.querySelector(".carta  .gif")
    const imagem = elemento.querySelector(".carta  .imagem")

    gif.classList.remove("esconder")
    imagem.classList.add("esconder")

    cartas_pra_cima.push(elemento)

    comparar();
}



function fecharcarta(cartavirada){

    const gif = cartavirada.querySelector(".carta  .gif")
    const imagem = cartavirada.querySelector(".carta  .imagem")

    gif.classList.add("esconder")
    imagem.classList.remove("esconder")

    cartas_pra_cima.pop()
}

function comparar(){

    if(cartas_pra_cima.length == 2){
        if(cartas_pra_cima[0].querySelector('.gif img').src !=
        cartas_pra_cima[1].querySelector('.gif img').src) {
            // TODO: colocar delay
            fecharcarta(cartas_pra_cima[1])
            fecharcarta(cartas_pra_cima[0])
        }
    }
 /*
    for(i=0; i<lista_visiveis.length; i++){
        gif = elemento.querySelector(".carta  .gif")
    }
*/
}