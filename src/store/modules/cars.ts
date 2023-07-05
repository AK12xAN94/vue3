import { defineStore } from "pinia";

let carsStore = defineStore('cars', {
    state: () => {
        return {
            carA: {
                name: '吉利',
                price: 179999
            }
        }
    },
    actions: {
        onSale() {
            this.carA.price -= 1000;
        }
    },
    getters: {
        showCar() {
            return `车名：${this.carA.name}，指导价：${this.carA.price}`
        }
    }
})

export default carsStore;