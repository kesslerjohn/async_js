let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let shopIsOpen = true

let order = (time, work) => {
    return new Promise( (resolve, reject) => {
        if (shopIsOpen) {
            setTimeout( () => {
                resolve(work())
            }, time)
        } else {
            reject(console.log("Our shop is closed"))
        }
    })
}

order(2000, () => console.log(`Customer selected ${stocks.Fruits[0]}`))

.then( () => {
    return order(0, () => console.log("Production has started"))
} )

.then( () => {
    return order(1000, () => console.log("The fruit was chopped"))
})