enum paymentStatus {
    Holded,
    Processed,
    Reversed
}
class Payment {
    id:number;
    status:paymentStatus;
    createdAt:Date;
    updatedAt:Date;

    constructor(id:number) {
        this.id = id
        this.createdAt = new Date()
        this.status = paymentStatus.Holded
    }

    getPayment(){
        return new Date().getTime() - this.createdAt.getTime()
    }

    unholdPayment(){
        if(this.status === paymentStatus.Processed){
            throw new Error("Error")
        }
        this.status = paymentStatus.Reversed
        this.updatedAt = new Date()
    }
}

const  payment = new Payment(1)
payment.unholdPayment()
const  time  = payment.getPayment()

