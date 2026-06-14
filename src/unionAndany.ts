let subs: number | string 

let apiRequestStatus: "pending" | "success" | "error" = "pending"

const orders = ['12' , '20' , '28' , '42']

let currentOrder: string | undefined;

for(let order of orders){
    if(order == '28'){
        currentOrder = order
        break
    }
}

console.log(currentOrder)