import './style.css';

const campoTexto = document.getElementById('campo-texto') as HTMLInputElement;
const botao = document.getElementById('button') as HTMLButtonElement; 
const lista = document.getElementById('lista') as HTMLDivElement;

function adicionarTexto() {
    const texto = campoTexto.value; 

    if (texto) { 
        let textos = JSON.parse(localStorage.getItem('@TEXTOS') || '[]'); 
        textos.push(texto); 
        localStorage.setItem('@TEXTOS', JSON.stringify(textos)); 
        campoTexto.value = ''; 

        atualizarLista(); 
    }
}

function atualizarLista() {
    lista.innerHTML = ''; 
    const textos = JSON.parse(localStorage.getItem('@TEXTOS') || '[]'); 

    textos.forEach((texto: string, index: number) => {
        const paragrafo = document.createElement('p'); 
        paragrafo.innerHTML = texto;

        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'Remover'; 
        botaoRemover.onclick = () => removerTexto(index); 

        paragrafo.appendChild(botaoRemover);
        lista.appendChild(paragrafo);
    });
}


function removerTexto(index: number) {

    let textos = JSON.parse(localStorage.getItem('@TEXTOS') || '[]'); 
    textos.splice(index, 1); 
    localStorage.setItem('@TEXTOS', JSON.stringify(textos)); 
    atualizarLista();
}

botao?.addEventListener('click', adicionarTexto);
atualizarLista();
