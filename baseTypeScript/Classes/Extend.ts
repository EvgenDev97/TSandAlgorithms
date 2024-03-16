type paymentStatusTwo = "new" | "paid"

class paymentTwo {
    id:number;
    status: paymentStatusTwo = "new"

    constructor(id:number) {
        this.id = id
    }

    pay(){
        this.status = "paid"
    }
}

class ParsPay extends paymentTwo {
    dataBase:number;
    paidAt: Date;

    constructor() {
        const id = Math.random()
        super(id);
    }

    save(){

    }

    override pay(date?:Date){
        super.pay();
        if(date){
            this.paidAt = date
        }
    }
}

 new ParsPay().pay()


class HttpError extends Error {
    code:number
    constructor(message:string , code?:number) {
        super();
        this.code = code ?? 500
    }
}


class SomeUser {
    name:string;
    constructor(name:string) {
        this.name = name
    }
}

class SomeUsers extends  Array<SomeUser>{
    searchByName(name:string){
        return this.filter((s) =>s.name === name)
    }
}

//composition
class UserList {
    users: SomeUser[]
    push (u:User){
        this.users.push(u)
    }
}


const someUsers = new SomeUsers()
someUsers.push(new SomeUser("Name"))