//we can use generics with interface and type
interface ILogTypeTwo<T> {
    date:Date,
    data:T
}


type iLogTypeTwo<T> = {
    date:Date;
    data:T
}

const logTypeTwo:ILogTypeTwo<{a:number,b:string}> = {
    date:new Date(),
    data:{
        a:1,
        b:"someString"
    }
}

const logTypeTw:iLogTypeTwo<{a:number,b:string}> = {
    date:new Date(),
    data:{
        a:1,
        b:"someString"
    }
}