const display = document.getElementById('display')
const buttons = document.querySelectorAll('.btn')

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent

        if (value === 'DEL') {
            display.value = display.value.slice(0, -1)
            return
        }

        if (value === 'C') {
            display.value = ''
            return
        }

        if (value === '=') {
            try {
                display.value = eval(display.value)
            } catch {
                display.value = 'Error'
            }
            return
        }
        display.value += value
    })
})