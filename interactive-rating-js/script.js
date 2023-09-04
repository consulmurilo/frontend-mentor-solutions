var lista = document.querySelector('.listaul')
var notaSelecionada = null

lista.addEventListener('click', function (event) {
    if (notaSelecionada) {
        notaSelecionada.style.backgroundColor = ''
        notaSelecionada.style.color = ''
    }

    var notaClicada = event.target
    
    if (notaClicada.tagName === 'LI') {
        notaClicada.style.backgroundColor = 'hsl(25, 97%, 53%)'
        notaClicada.style.color = 'white'

        notaSelecionada = notaClicada

        // var valorNota = notaClicada.id
    }
})

var btn = document.querySelector('.botao')

btn.addEventListener('click', function (event) {
    if (notaSelecionada == null) {
        alert('Select a value!')
    } else {
        var valorNota = notaSelecionada.id

        document.querySelector('.secao').style.display = 'none' 
        document.querySelector('.divpos').style.display = 'flex'      
        
        document.querySelector('.posnota').innerText = `You selected ${valorNota} out of 5`
    }
})