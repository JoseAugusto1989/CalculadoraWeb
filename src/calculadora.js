function insert(num) {
    var numero = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = numero + num
}

function clean() {
    document.getElementById('result').innerHTML = ''
}

function back() {
    var result = document.getElementById('result').innerHTML
    document.getElementById('result').innerHTML = result.substring(0, result.length -1)
}

function calculator() {
    var resultado = document.getElementById('result').innerHTML
    if (resultado) {
        document.getElementById('result') = eval(resultado)

    } else {
        document.getElementById('result').innerHTML = 'Error'
    }
}