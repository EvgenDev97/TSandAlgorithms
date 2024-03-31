type Constructor = new (...args:any[])=>{}

type GConstructor<T = {}> = new (...args:any[])=>T

class List {
    constructor(public items:string[]) {}
}






class ExtendsList extends  List{
    first(){
        return this.items
    }
}

///////////////////////////
class Accordion {
    isOpened:boolean
}

type ListAcc = GConstructor<Accordion>


type ListType = GConstructor<List>

function ExtList<TBase extends ListType >(Base:TBase){ //mixin
    return class ExtList extends Base{
        first(){
            return this.items[0]
        }
    }
}

const L = ExtList(List)
const res  = new L (["f", "s"])