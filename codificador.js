// Código codificar e descodificar

function codifica(texto) {
    let letras = texto.split("");

    letras.forEach(function(item, i) {
        if (item == "a") {
            letras[i] = "ai";

        } else if (item == "e") {
            letras[i] = "enter";

        } else if (item == "i") {
            letras[i] = "imes";

        } else if (item == "o") {
            letras[i] = "ober";

        } else if (item == "u") {
            letras[i] = "ufat";
        }
    });
    return letras.join("");
}

function decodifica(texto) {
    let codigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];

    for (var i = 0; i < codigo.length; i++) {
        texto = texto.split(codigo[i][1]).join(codigo[i][0]);
    }
    return texto;
}

function escreveCodificado() {
    botaoCopiar.classList.remove("invisivel");
    textarea.classList.remove("invisivel");
    textoResultado.textContent = codifica(textoInserido.value);
    document.querySelector(".articulacao__imagem").classList.add("invisivel");
    document.querySelector(".articulacao .texto").classList.add("invisivel");
}

function escreveDecodificado() {
    botaoCopiar.classList.remove("invisivel");
    textarea.classList.remove("invisivel");
    textoResultado.textContent = decodifica(textoInserido.value);
    document.querySelector(".articulacao__imagem").classList.add("invisivel");
    document.querySelector(".articulacao .texto").classList.add("invisivel");
}

let textoInserido = document.querySelector(".secao__Input__Texto");
let textoResultado = document.querySelector(".texto__resultado");
let botaoCodificar = document.querySelector(".secao__button__codificar");
let botaoDescodificar = document.querySelector(".secao__button__descodificar");
let botaoCopiar = document.querySelector(".botao__copiar");
let textarea = document.querySelector(".texto__resultado.invisivel"); // Correção aqui

// Codigo do botão copiar

botaoCopiar.onclick = function() {
    let inputTemp = document.createElement("textarea");
    inputTemp.value = textoResultado.textContent;
    document.body.appendChild(inputTemp);
    inputTemp.select();
    document.execCommand("copy");
    document.body.removeChild(inputTemp);
    
    textoInserido.value = "";
    textoInserido.focus();
    textoResultado.textContent = "";
    botaoCopiar.classList.add("invisivel");
    textarea.classList.add("invisivel");
    document.querySelector(".articulacao__imagem").classList.remove("invisivel");
    document.querySelector(".articulacao .texto").classList.remove("invisivel");
}

// Adiciona os listeners aos botões
botaoCodificar.onclick = escreveCodificado;
botaoDescodificar.onclick = escreveDecodificado;

