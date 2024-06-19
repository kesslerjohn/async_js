let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let order = (fruit_idx, prod_fn) => {
    setTimeout(() => {
        console.log(`${stocks.Fruits[fruit_idx]} were selected`)
        prod_fn()
    }, 2000)
}

let production = () => {
    setTimeout(() => {
        console.log("Production has started")

        setTimeout(() => {
            console.log("The fruit has been blent")

            setTimeout(() => {
                console.log(`${stocks.Liquid[0]} and ${stocks.Liquid[1]} was added`)
            }, 1000)
        }, 2000)
    }, 0)
}

order(0, production)