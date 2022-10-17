// variaveis globais
const prato1 = document.querySelector(".prato1");
const prato2 = document.querySelector(".prato2");
const prato3 = document.querySelector(".prato3");

const bebida1 = document.querySelector(".bebida1");
const bebida2 = document.querySelector(".bebida2");
const bebida3 = document.querySelector(".bebida3");

const sobremesa1 = document.querySelector(".sobremesa1");
const sobremesa2 = document.querySelector(".sobremesa2");
const sobremesa3 = document.querySelector(".sobremesa3");

// funcao fechar pedido
function fecharPedido() {
    const p1b = prato1.classList.contains("bordaPrato");
    const p2b = prato2.classList.contains("bordaPrato");
    const p3b = prato3.classList.contains("bordaPrato");

    const b1b = bebida1.classList.contains("bordaBebida");
    const b2b = bebida2.classList.contains("bordaBebida");
    const b3b = bebida3.classList.contains("bordaBebida");

    const s1b = sobremesa1.classList.contains("bordaSobremesa");
    const s2b = sobremesa2.classList.contains("bordaSobremesa");
    const s3b = sobremesa3.classList.contains("bordaSobremesa");

    const botao = document.querySelector(".botao");

    if ((p1b || p2b || p3b) && (b1b || b2b || b3b) && (s1b || s2b || s3b)) {
        botao.innerHTML = "Fechar Pedido";
        botao.classList.add("novoBotao");
    }
}

// funcao selecao de prato
function toggleSelectionPrato(pratoSelecionado) {
    // alert("teste");
    const borda = document.querySelector(".bordaPrato");
    if (borda !== null) {
        borda.classList.remove("bordaPrato");
    }
    pratoSelecionado.classList.add("bordaPrato");

    fecharPedido();
}

// funcao selecao de bebida
function toggleSelectionBebida(bebidaSelecionada) {
    // alert("teste");
    const borda = document.querySelector(".bordaBebida");
    if (borda !== null) {
        borda.classList.remove("bordaBebida");
    }

    bebidaSelecionada.classList.add("bordaBebida");

    fecharPedido();
}

// funcao selecao de sobremesa
function toggleSelectionSobremesa(sobremesaSelecionada) {
    // alert("teste");
    const borda = document.querySelector(".bordaSobremesa");
    if (borda !== null) {
        borda.classList.remove("bordaSobremesa");
    }

    sobremesaSelecionada.classList.add("bordaSobremesa");

    fecharPedido();
}

