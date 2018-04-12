const API_URL = 'http://localhost:3000/api/v1/products';

export default {
    getProducts() {
        return JSON.stringify([
            {
                id:1,
                title:"product1",
                descirption:"dscr1",
                price:"1",
                quantity:1
            },
            {
                id:2,
                title:"product2",
                descirption:"dscr2",
                price:"1",
                quantity:1
            },
            {
                id:3,
                title:"product3",
                descirption:"dscr3",
                price:"1",
                quantity:1
            },
            {
                id:4,
                title:"product4",
                descirption:"dscr4",
                price:"1",
                quantity:1
            }
        ]);
    }
}