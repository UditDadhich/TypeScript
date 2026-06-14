let response: any = "42"

let numericLength: number = (response as string).length

type Book = {
    name: string;
};

let bookString = `{"name": "who moved my cheese"}`;

let bookObject = JSON.parse(bookString) as Book

console.log(bookObject)

const inputElement = document.getElementById("username") as HTMLInputElement;

try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message)
    }
    console.log("Error" , error)
}

const data: unknown = "Chai aur code"
const strData: string = data as string

type Role = "admin" | "user"

