function digitarLetras(elemento) {
    const arrDigitos = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    arrDigitos.forEach((Letra, i) => {
        setTimeout(()=>{
            elemento.innerHTML += Letra;
        }, 75 * i)
    });
}

const titulo = document.querySelector('.digitando');
digitarLetras(titulo);