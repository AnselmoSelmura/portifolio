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
divExperienc[0].classList.add('ativo')
listExperienc[0].classList.add('ativo')

const divEducation = document.querySelectorAll('.educacao-content .feito');
const listEducation = document.querySelectorAll('.educacao-content .list-span li')
divEducation[0].classList.add('ativo')
listEducation[0].classList.add('ativo')

function slidShow(index) {
    divExperienc.forEach((feito) =>{
        feito.classList.remove('ativo')
    });
    listExperienc.forEach((botao) =>{
        botao.classList.remove('ativo')
    });
    divExperienc[index].classList.add('ativo')
    listExperienc[index].classList.add('ativo')
}

function slidShow2(index) {
    divEducation.forEach((feito) =>{
        feito.classList.remove('ativo')
    });
    listEducation.forEach((botao) =>{
        botao.classList.remove('ativo')
    });
    divEducation[index].classList.add('ativo')
    listEducation[index].classList.add('ativo')
}

listExperienc.forEach((event,index) =>{
    event.addEventListener('click', () =>{
        slidShow(index)
    });
});

listExperienc.forEach((event,index) =>{
    event.addEventListener('click', () =>{
        slidShow2(index)
    });
});