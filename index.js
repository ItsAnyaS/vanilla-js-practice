const button = document.querySelector('#button')
const countDisplay = document.querySelector('#counter')
let buttonCount = 0


button.addEventListener('click', e => {
    buttonCount++
    countDisplay.innerHTML = buttonCount
})
