//number
let a:number = 500;
let b: number = 500
let c:number = a+ b
console.log(c)
let f = "string";
let bool:boolean = true

//function

function  fullName (firstName:string, lastName:string){
    return `${firstName} ${lastName}`
}

const getFullNameArrow = (firstName:string, lastName:string)=>{
    return `${firstName} ${lastName}`
}

//objects
const users = {
    firstName: "someName",
    lastName: "someLastName",
    city:"someCity",
    age:35,
    skills:{
        dev:true,
        devOps:true
    }
}

const getUser = (user:{firstName:string, age:number}):string =>{
    return `${user.firstName} and ${user.age}`
}

// arrays
const skills:string[] = ["Dev", "Devops"]
for (const skill of skills){
    console.log(skill.toUpperCase())
}