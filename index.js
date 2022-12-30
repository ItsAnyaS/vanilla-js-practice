const increase = document.querySelector('#increase')
const decrease = document.querySelector('#decrease')
const countDisplay = document.querySelector('#counter')
let buttonCount = 0


increase.addEventListener('click', e => {
    buttonCount++
    countDisplay.innerHTML = buttonCount
})

decrease.addEventListener('click', e => {
    if (buttonCount >  0){
        buttonCount--
        countDisplay.innerHTML = buttonCount
    }
})
