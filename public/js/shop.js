class List {
    items = []

    constructor() {
        let goods = this.fetchGoods()
        goods = goods.map((cur) => {
            return new GoodItem(cur)
        })
        this.items.push(...goods)
        this.render()
    }


    fetchGoods() {
        return [
            { imgUrl: './images/placeholder.png', name: 'Shirt-1', price: 150 },
            { imgUrl: './images/placeholder.png', name: 'Shirt-2', price: 350 },
            { imgUrl: './images/placeholder.png', name: 'Shirt-3', price: 1500 },
            { imgUrl: './images/placeholder.png', name: 'Shirt-4', price: 250 },
        ]
    }

    render() {
        this.items.forEach(good => {
            good.render()
        })
    }
}

class GoodItem {
    imgUrl = ''
    name = ''
    price = 0

    constructor({ imgUrl, name, price }) {
        this.imgUrl = imgUrl
        this.name = name
        this.price = price
    }

    render() {
        const placeToRender = document.querySelector('.goods-list')
        if (placeToRender) {
            const block = document.createElement('div')
            block.innerHTML = `
            <img src="${this.imgUrl}" alt="${this.name}">
            <h3>${this.name}</h3>
            <p>${this.price}</p>
            <button>Добавить в корзину</button>
            `
            block.classList.add('item')
            placeToRender.appendChild(block)

        }

    }
}

class Basket {

    addItem() {

    }

    removeItem() {

    }

    render() {

    }
}



const ListInstance = new List()