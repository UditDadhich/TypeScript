// class Chai{
//     flavour: string;
//     price: number

//     constructor(flavour: string , price:number){
//         this.flavour = flavour
//         this.price = price
//     }
// }

// const masalaChai =new Chai("Ginger" , 20)


class Chai {
    public flavor: string ="Masala Chai"

    private secretIngredients = "Cardamon"

    reveal(){
        return this.secretIngredients //ok
    }
}

const c = new Chai()

class Shop {
    protected shopName = "Chai Corner"
}

class Branch extends Shop {
    getName(){
        return this.shopName
    }
}

new Branch().getName()


class Wallet {
    #balance = 10000000000

    getBalance(){
        return this.#balance
    }
}

const w = new Wallet()

class Cup{
    readonly capacity: number = 250

    constructor(capacity:number){
        this.capacity = capacity
    }
}

class ModernChai{
    private _sugar = 2;

    get sugar(){
        return this._sugar
    }

    set sugar (value:number){
        if(value > 5) throw new Error ("Too sweet");
        this._sugar = value
    }
}

class EkChai{
    static shopName = "Chaicode caffee"

    constructor(public flavour: string){}
}

console.log(EkChai.shopName);

abstract class Drink{
    abstract make(): void
}

class MyChai extends Drink{
    make(): void {
        console.log("Brewing chai")
    }
}

class Heater {
    heat(){}
}

class ChaiMaker{
    constructor(private heater: Heater){}

    make(){
        this.heater.heat
    }
}