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