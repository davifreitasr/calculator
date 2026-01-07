// ADICIONAR OS NÚMEROS AO DISPLAY
// LIMPAR TODOS OS NÚMEROS DO DISPLAY
// LIMPAR NÚMERO ATUAL DO DISPLAY
// SOMAR OS NÚMEROS DO DISPLAY

function insertToDisplay(data) {
    document.querySelector('#display').value += data // adiciona o número ao display
}

function clean() {
    document.querySelector('#display').value = '' // limpa o display
}

function back() {
    const display = document.querySelector('#display')
    display.value = display.value.slice(0, -1) // slice remove o último caractere
}

function result() {
    const display = document.querySelector('#display')
    
    try { // tenta executar o cálculo
        display.value = eval(display.value).toFixed(2) // eval() para executar o cálculo / toFixed(2) para limitar casas decimais
    } catch { // se der erro exibe a mensagem
        display.value = 'Error'       
    }
}