function logObj (arg: {a:number} | {b:number}){
    if("a" in arg){
        console.log(arg.a)
    }else{
        console.log(arg.b)
    }
}

function lolMult(a:string|number, b:string|boolean){
    if(a === b){
        a.toUpperCase()
        b.toUpperCase()
    }else{

    }
}