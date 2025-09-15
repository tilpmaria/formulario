import { PALAVRAS_RUINS } from "./PalavrasRuins.js";
const botaoMostraPalavras = document.querySelector("#botao-palavrachave"); 

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave); 

function mostraPalavrasChave() { 
let palavras = texto.split(/\P{L}+/u);

    for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();
    }

    palavras = tiraPalavrasRuins(palavras);

    const frequencias = contaFrequencias(palavras);
    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }

    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    return ordenadas.slice(0, 10);
}
