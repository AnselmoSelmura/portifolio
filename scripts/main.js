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

//ESSE SCRIPT TRAZ O MENO E O ESCONDE
const ativaMenu = document.querySelector('.fa-bars');
const listMenu = document.querySelector('header .list-menu')

ativaMenu.addEventListener('click', ()=>{
    ativaMenu.classList.toggle('fa-x')
    listMenu.classList.toggle('ativado')
})

//ESSE SCRIPT TRAZ O RESUMO
const divExperienc = document.querySelectorAll('.esperiencia-content .feito');
const listExperienc = document.querySelectorAll('.esperiencia-content .list-span li')

const divEducation = document.querySelectorAll('.educacao-content .feito');
const listEducation = document.querySelectorAll('.educacao-content .list-span li')

function slidShow(index) {
    divExperienc.forEach((feito) =>{
        feito.classList.remove('ativo')
    });
    divEducation.forEach((botao) =>{
        botao.classList.remove('ativo')
    });
    divExperienc[index].classList.add('ativo')
}