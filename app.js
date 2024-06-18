let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}



let order = (fruit_idx, prod_fn) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_idx]}`)
    }, 2000)

    prod_fn()
}

let production = () => {
    
}

order(0, production)