let stocks = {
    Fruits : ["strawberries", "grapes", "bananas", "apples"],
    Liquid : ["water", "ice"],
    Holder : ["cone", "cup", "stick"],
    Toppings : ["chocolate", "peanuts"]
}

let shopIsOpen = true

function time(ms) {
    return new Promise( (resolve, reject) => {
        if (shopIsOpen) {
            setTimeout(resolve, ms)
        }
        else {
            reject(console.log("Shop is closed"))
        }
    })
}

async function kitchen() {
    try{
        await time(2000)
        console.log(`${stocks.Fruits[0]} chosen`)

        console.log("Start production")

        await time(2000)
        console.log("Next thing")

        await time(3000)
        console.log("Last ice cream task")
    }
    catch(error){
        console.log("Customer left", error)
    }
    finally{
        console.log("Day ended, shop is closed")
    }
}

kitchen()