let inp = document.querySelector(`input`)
let Subscribe = document.querySelector(`.Subscribe`)
let Proplem = document.querySelector(`.Proplem`)
let subscribing = document.querySelector(`.subscribing`)
let one = document.querySelector(`.one`)
let illustration = document.querySelector(`.illustration`)
let span = document.querySelector(`.subscribing span`)
let main = document.querySelector(`main`)
let Dismiss = document.querySelector(`.Dismiss`)
let illustrationSign = document.querySelector(`.illustrationSign`)
Subscribe.addEventListener("click", () => {
    let test = /\w+@gmail.com/ig.test(inp.value)
    if (!test) {
        Proplem.style.display = `flex`
        inp.style.borderColor = `red`
        inp.style.backgroundColor = `#ddc2c1`
        inp.style.color = `red`
        inp.style.outline = `0`
        inp.placeholder.color = `red`
        illustrationSign.style.display = ``
    } else {
        illustrationSign.style.display = `none`
        span.innerHTML = inp.value
        if (window.innerWidth < 700) {
            // main.style.width = `100%`
            // main.style.padding = `200px 20px 0 20px`
            // Dismiss.style.marginTop = `200px`
        } else {
            // main.style.width = `40%`
            // Dismiss.style.marginTop = `0`
        }
        illustration.style.display = `none`
        one.style.display = `none`
        subscribing.style.display = `flex`
        Proplem.style.display = `none`
        inp.style.outline = `0`
        inp.style.color = ``
        inp.style.backgroundColor = ``
        inp.style.borderColor = ``
    }
})
inp.addEventListener(`click`, () => {
    Proplem.style.display = `none`
    inp.style.outline = `0`
    inp.style.color = ``
    inp.style.backgroundColor = ``
    inp.style.borderColor = ``
})
Dismiss.addEventListener(`click`, () => {
    main.style.padding = ``
    main.style.width = ``
    illustrationSign.style.display = ``
    illustration.style.display = ``
    one.style.display = `flex`
    subscribing.style.display = `none`
})