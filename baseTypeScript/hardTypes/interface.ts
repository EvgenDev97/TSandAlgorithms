interface UserTwo {
    name:string,
    age:number,
    skills:string[]

    log:(id:number) => string
}

interface roleId extends  UserTwo{
    roleId : number,
    createdAt:Date,
}

let person: roleId = {
    name:"beaver",
    age:10,
    skills:["someSkills"],
    roleId:1,
    createdAt:new Date(),

    log(){
        return ""
    }
}

interface Dict {
    [index:number]:User //unlimited number of properties, where key is a number, value is user
}

type  ud = Record<number, UserTwo> // dict

