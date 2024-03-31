function logMiddleWare<T>(data:T):T{
    console.log(data)
    return data
}

const red = logMiddleWare<number>(10)
const redtwo = logMiddleWare("string")

function splitHalf<T>(data:T[]):T[] {
    const l = data.length /2
    return data.splice(0,l)
}


function toString<T>(data:T):string | undefined{
    if(Array.isArray(data)){
        return data.toString()
    }
    switch (typeof  data) {
        case "string":
            return data;
        case "number":
        case "bigint":
        case "boolean":
        case "symbol":
            return data.toString()
        case "object":
            return JSON.stringify(data)
        default:
            return undefined

    }
}

//generic with arrow function
const splitArr = <T> (arg:T):T =>{
    return arg
}

