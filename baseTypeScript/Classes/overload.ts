class  UserFive {
    name:string;
    age:number;

    constructor()
    constructor(name:string) // public constructor
    constructor(age:number) //
    constructor(name:string, age:number) //
    constructor(ageOrName?:string | number, age?:number) { //implementation constructor
        if(typeof ageOrName === "string"){
            this.name = ageOrName
        }else if (typeof ageOrName === "number"){
            this.age = ageOrName
        }
        if(typeof age === 'number'){
            this.age =age
        }
    }
}

const us = new UserFive("name")
const us2 = new UserFive()
const us3 = new UserFive(25)
const us4 = new UserFive("name", 25)
// if "strictPropertyInitialization": false
// class Admin {
//     role:number
// }
//
// const admin = new Admin()
// admin.role = 1


// if "strictPropertyInitialization": true
class Admin {
    role!:number
}

const admin = new Admin()
admin.role = 1