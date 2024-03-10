interface UserFour {
    name:string
}

const someObj = {}
assertUser(someObj)
someObj.name = "name"
function assertUser(obj:unknown):asserts obj is User{
    if( typeof obj === "object" && !!obj && "name" in obj){
        return
    }
    throw new Error("")
}