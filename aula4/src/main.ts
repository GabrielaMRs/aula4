import './style.css'

const campoTexto = document.getElementById('campo-texto') as HTMLInputElement 
const botao = document.getElementById('button') as HTMLButtonElement
const lista = document.getElementById('lista') as HTMLDivElement

console.log(campoTexto)
botao?.addEventListener('click', function(){
    const texto = campoTexto?.value;
    console.log(texto);

    const paragrafo = document.createElement('p');
    paragrafo.innerHTML = texto;
    lista?.appendChild(paragrafo)

    localStorage.setItem('@TEXTO', texto);
})



