interface UserThree  {
    name:string;
    email:string;
    login:string
}

interface Admin {
    name:string;
    role:number
}

function logId(id:string | number){
    if(typeGuard(id)){
        //
    }else{
        //
    }
}

function typeGuard(x: string | number):x is string{
    return typeof x === "string"
}

function isAdmin(x: UserThree | Admin): x is Admin{
    return "role" in x;
}

function  isAdminAlternative(user: UserThree | Admin): user is Admin {
    return (user as Admin).role !== undefined
}

function  setRole(user:UserThree | Admin){
    if(isAdmin(user)){
        user.role
    }else{
        throw  new Error("error")
    }
}