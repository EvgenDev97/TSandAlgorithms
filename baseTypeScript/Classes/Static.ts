class UserService {
    static db: any;

    static getUser(id:number){
        return UserService.db.find(id)
    }

    create(){

    }

    static {
        UserService.db = "string"
    }
}

UserService.getUser(1)

 class PayMent {
    private date:Date = new Date()

     getDate(this:PayMent){
        return this.date
     }

     getDateArrow = () =>{ // context is not lost with arrow method
        return this.date
     }
 }

 const p = new PayMent()

 const againUser = {
    id:1,
     paymentDate:p.getDate.bind(p),
     paymentDateArrow:p.getDateArrow()
 }

 console.log(againUser.paymentDate())

 class PayMentPers extends PayMent {
    save(){
        return super.getDate()
        // return super.getDateArrow() will be error! there are no arrow functions in the object prototype
        // return this.getDateArrow()  it`s will be work
    }
 }

 console.log(new PayMentPers().save())