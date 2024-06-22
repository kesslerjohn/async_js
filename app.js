let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let shopIsOpen = true

let toppingsChoice = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(
            console.log("which topping would you like?")
        )}, 3000)
    })
}

async function kitchen() {
    console.log("A")
    console.log("B")
    await toppingsChoice()

    console.log("C")
    console.log("D")
    console.log("E")
}

kitchen()

console.log("doing dishes")

console.log("cleaning tables")

console.log("other tasks")