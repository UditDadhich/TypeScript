type ChaiOrder = {
    type: string;
    sugar: number;
    strong: boolean;
}

function makeChai(order: ChaiOrder){
    console.log(order)
}

function serverChai(order: ChaiOrder){
    console.log(serverChai)
}

type TeaReceipe = {
    water: number;
    milk: number
}

class MasalaChai implements TeaReceipe {
    water = 100;
    milk = 50;
}

interface CupSize  {
    size: "small" | "large"}

class Chai implements CupSize {
    size: "small" | "large" = "large";
}

type TeaType = "masala" | "ginger" | "lemon"

function orderChai(t: TeaType){
    console.log(t);
}

type User = {
    username: string;
    bio?: string
}

const u1: User = {username: "Udit"}
const u2: User = {username: "Udit" , bio: "Udit.ai"}

type Config = {
    readonly appName: string
    version: number
}

const cfg: Config = {
    appName: "Masterji",
    version: 1
}