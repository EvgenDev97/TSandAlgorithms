class Vehi {
    run:number
}
//ts knows that T is something class
function kmToMiles<T extends Vehi>(veh:T):T{
    veh.run = veh.run / 0.62
    return veh
}

class LCV extends Vehi {
    capacity:number
}

const vehicl = kmToMiles(new Vehi())
const lcv = kmToMiles(new LCV())
kmToMiles({run:152})

function logIdAgain <T extends string |number, Y>(id:T, addData:Y): { id:T,addData:Y }{
    console.log(addData)
    return {id, addData}

}