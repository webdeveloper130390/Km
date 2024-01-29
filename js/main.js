var elTitle = document.querySelector('.title')
var elResult = document.querySelector('.piyoda')
var elVaqt = document.querySelector('.bike')
var elMosh = document.querySelector('.car')
var elSamal = document.querySelector('.plane')
var elInp = document.querySelector('.inp')

function ishlatish() {
    var Inp = elInp.value * 1

    if (Inp / 4) {
        elResult.textContent = Inp / 4
    } else {
        elResult.textContent = "N soat"
    }
    if (Inp / 20) {
        elVaqt.textContent = Inp / 20
    } else {
        elVaqt.textContent = "N soat"
    }
    if (Inp / 100) {
        elMosh.textContent = Inp / 100
    } else {
        elMosh.textContent = "N soat"
    }
    if (Inp / 800) {
        elSamal.textContent = Inp / 800
    } else {
        elSamal.textContent = "N soat"
    }
    elInp.value = ''
    elInp.focus()
}