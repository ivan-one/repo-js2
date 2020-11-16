class Button {
    text = ''

    constructor(text) {
        this.text = text
        this.render()
    }

    onBtnClick() {
        console.log('clicked!?')
    }

    getTemplate() {
        const btn = document.createElement('button')
        btn.classList.add('btn')

        return btn
    }

    render() {
        const placeToRender = document.querySelector('.buttons')
        if (placeToRender) {
            const btn = this.getTemplate()
            btn.innerHTML = this.text
            placeToRender.appendChild(btn)

            btn.addEventListener('click', () => {
                this.onBtnClick()
            })
        }

    }
}

class AlertButton extends Button {
    constructor(text) {
        super(text)
    }

    onBtnClick() {
        alert('Click')
    }
}



const Btn = new Button('Click me')



const AlertBtn = new AlertButton('Alert')
console.log(AlertBtn)