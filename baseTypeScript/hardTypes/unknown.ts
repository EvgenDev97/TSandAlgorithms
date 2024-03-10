async function getData(){
    try{
        await fetch("")
    }catch (err){
        if(err instanceof  Error){ // The instanceof operator allows you to check whether an object belongs to a specified class, taking into account inheritance.
            // const e = err as Error
            console.log(err.message)
        }
    }
}


