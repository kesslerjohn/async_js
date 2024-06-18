let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let order = (fruit_idx, prod_fn) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_idx]}`)
        prod_fn()
    }, 2000)
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started")
    }, 0)
}

order(0, production)