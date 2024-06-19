let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let shopIsOpen = false

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
    return order(2000, () => console.log("The fruit was chopped"))
})

.then( () => {
    return order(1000, () => console.log(`Added ${stocks.Liquid[0]} and ${stocks.Liquid[1]}`))
})

.then( () => {
    return order(2000, () => console.log(`Selected ${stocks.Holder[1]} as the container`))
})

.then( () => {
    return order(3000, () => console.log(`Added ${stocks.Toppings[0]} and ${stocks.Toppings[1]} as toppings`))
})

.then( () => {
    return order(2000, () => console.log("Served ice cream."))
})

.catch( () => {
    console.log("Customer left.")
})

.finally(() => console.log("Shop is closed."))

