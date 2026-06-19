function makeChai(type: string , cups: number){
    console.log(`Making ${cups} cups of ${type}`)
}

makeChai("Masala Chai", 2);

function getChaiPrice(): number {
    return 25
}

function logChai(): void {
    console.log("Chai is ready")
}

// function orderChai(type?: string){

// }


function createChai(order: {
    type: string;
    sugar: number;
    size: "small" | "large"
}): number{
    return 4
}