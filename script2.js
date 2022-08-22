let cartas = [
    "bobrossparrot",
    "explodyparrot",
    "fiestaparrot",
    "metalparrot",
    "revertitparrot",
    "tripletsparrot",
    "unicornparrot",
];

//contar quantas clicadas o user deu
let contar_clicadas = 0;

//cartas visiveis
let baralho = [];

//cartas que o user acertou
let certo = 0;

let primeira_carta
let segunda_carta

//comecar o jogo: pedir o input no numero de carta as serem jogadas
function comecar() {

    contar_clicadas = 0;

    do {
        n = prompt("Diga o numero o cartas");
    } while (n < 4 || n > 14 || n % 2 == 1);

    //teste
    console.log(`teste começar: ${n}`)

    displaycartas(n)
}

comecar()


//cria um baralho com as  cartas que serão usadas no jogo
//e depois embaralha elas com comparador()
function displaycartas(n) {

    for (let i = 0; i < n / 2; i++) {
        baralho.push(cartas[i])
        baralho.push(cartas[i])
    }

    baralho.sort(comparador)
    baralho.sort(comparador)

    //teste
    console.log(`teste display cartas: o baralho é ${baralho}`)

    renderizar_cartas()
}

//funcçao de embaralhar
function comparador() {
    return Math.random() - 0.5;
}

//função para dar um gif para cada elemento da lista carta
function renderizar_cartas() {

    for (let i = 0; i < baralho.length; i++) {
        document.querySelector(".jogo").innerHTML += `
        <button class="carta" onclick="clicarcarta(this)">
            <div class="lado frente">
                <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/front.png" />
            </div>
            <div class="lado verso">
                <img src="./Arquivos Úteis - Projeto 04 - Parrot Card Game/${baralho[i]}.gif" />
            </div>
        </button>      
`
    }

}


//virar a carta e colocar ela como primeira ou segunda carta
function clicarcarta(elemento) {

    //condição para saber se a carta ja foi clicada
    if (primeira_carta === undefined && !(elemento.classList.contains("virar"))) {
        primeira_carta = elemento;
        elemento.classList.add("virar");
        contar_clicadas += 1;

        //teste
        //console.log(`teste clicar_carta 1°if: ${elemento}`)

    } else if (segunda_carta === undefined && !(elemento.classList.contains("virar"))) {
        segunda_carta = elemento;
        elemento.classList.add("virar");
        contar_clicadas += 1;

        //teste
        //console.log(`teste clicar_carta 2°if: ${elemento}`)

    }


    //Fazer a comparação entre as cartas
    if (primeira_carta !== undefined && segunda_carta !== undefined) {
        //comparar as cartas depois de um 1,5s
        if (primeira_carta.innerHTML === segunda_carta.innerHTML) {
            certo += 2
            primeira_carta = undefined
            segunda_carta = undefined
            fim_de_jogo()
        } else {
            //criei uma função dentro do setTimeout para "desvirar" as cartas e resetar os valores de primeira e seunga carta
            setTimeout(() => {
                primeira_carta.classList.remove("virar")
                segunda_carta.classList.remove("virar")
                primeira_carta = undefined
                segunda_carta = undefined

            }, 1000)
        }


    }

    //teste
    console.log(`teste clicar_carta 3°if: ${certo}`)

    /* sepa bonus
    if (plays === 1) {
            watch();
        }
    */
}


function fim_de_jogo() {
    if (certo == baralho.length) {
        alert(`Parabens! Você terminou em ${contar_clicadas} clicadas`)
        resp = prompt("Quer continuar sofrendo?")
        if(resp==="sim"){
            document.querySelector(".jogo").innerHTML = ""
            baralho = []
            certo = 0
            comecar()

        }
    }
}







