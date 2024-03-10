interface UserThree {
    login:string,
    password?:string|number ,
}

const userAgain = {
    login:"login@gmail.com"
}

function multiply(first:number, second:number | undefined) {
    if(!second){
        return first*first
    }
    return first*second
}