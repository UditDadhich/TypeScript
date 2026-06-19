const chaiFlavours: string[] = ["Masala", "Adrak"]
const chaiPrice: number[] = [10,20]

const rating: Array<number> = [4.5, 5.0]

type Chai = {
    name: string;
    price: number
}

const menu: Chai[] = [
    {name: "Pena Colada" , price: 250},
    {name: "Whiskey sour" , price: 280}
]
menu.push({
    name: "Masala chai",
    price: 25
})

const cities: readonly string[] = ["Delhi" , "Jaipur"]

const table: number[][] = [
        [1,2,3],
        [4,5,6]
]

let chaiTuple: [string , number];
chaiTuple = ["Masala" , 20]

let userInfo: [string , number , boolean?]
userInfo = ["Udit" , 100]
userInfo = ["Udit" , 100 , true]

const chaiItem: [name: string , price:number] = ["Masala" , 25]

enum cupSize {
    SMALL,
    MEDIUM,
    LARGE
}
const size = cupSize.LARGE

enum Status {
    PENDING = 100,
    SERVED, //101
    CANCELLED //102
}

enum ChaiType {
    MASALA = "masala",
    GINGER = "ginger"
}

function makeChai(type:ChaiType){
    console.log(`Making: &{type}`)
}
makeChai(ChaiType.GINGER)

enum RandomEnum {
    ID = 1,
    NAME = "chai"
}

