function getChai(kind: String | number){
    if(typeof kind === 'string' ) {
        return `Making ${kind} of chai`
    }
    return `Chai order: ${kind}`
}

function serverChai(msg? : string){
    if(msg){
        return `Serving ${msg}`;
    }
    return `Serving default masala chai`
}

function orderChai(size: "small" | "medium" | "large"){
    if(size === "small"){
        return `small cutting chai`
    }if(size === "medium" || size === "large"){
        return `make extra chai`
    }
    return `chai order #${size}`
}

type ChaiOrder = {
    type: string
    sugar: number
}

function isChaiOrder(obj:any):obj is ChaiOrder{
    return (
        typeof obj === "object" && 
        obj != null && 
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}