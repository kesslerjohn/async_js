let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let shopIsOpen = true

/*let order = () => {
    return new Promise( (resolve, reject) => {

    })
}*/

let toppingsChoice = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            console.log("which topping would you like?")
        }, 3000)
    })
}

async function kitchen() {
    console.log("A")
    console.log("B")
    console.log("C")
    console.log("D")
    console.log("E")
}