let titulos = document.querySelectorAll('h2')
let paragrafos = document.querySelectorAll('p')
let setas = document.querySelectorAll('.seta')

function fechar() {
    titulos.forEach(function(titulo, index) {
        titulo.style.fontWeight = '400'
        setas[index].style.transform = ''
        paragrafos[index].style.maxHeight = '0px'
    })
}

titulos.forEach(function(clique, index) {
    clique.addEventListener('click', function() {
        let tituloClicado = titulos[index]
        let paragrafoClicado = paragrafos[index]
        let setaClicada = setas[index]

        if (tituloClicado.style.fontWeight === '600') {
            tituloClicado.style.fontWeight = '400'
            paragrafoClicado.style.maxHeight = '0px'
            setaClicada.style.transform = ''
        } else {
            fechar()
            tituloClicado.style.fontWeight = '600'
            paragrafoClicado.style.maxHeight = '200px'
            setaClicada.style.transform = 'rotate(180deg)'
        }
    })
})