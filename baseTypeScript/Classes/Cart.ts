class Product {
    constructor(
        public id:number,
        public title:string,
        public price:number
    ) {}

}


class Delivery {
    constructor(
        public date:Date
    ) {}
}

class homeDelivery extends Delivery{
    constructor(date:Date, public address:string) {
        super(date);
    }
}

class shopDelivery extends Delivery{
    constructor(public shopId:number) {
        super(new Date());
    }
}


type deliveryOpt = homeDelivery | shopDelivery
class Cart {
    private product:Product[] = []
    private delivery:deliveryOpt

    public addProduct(product:Product):void{
        this.product.push(product)
    }

    public deleteProduct(productId:number):void{
        this.product.filter((product:Product)=>product.id !== productId)
    }

    public getSum():number{
        return this.product
            .map((p:Product)=>p.price)
            .reduce((p1:number, p2:number)=> p1 + p2)
    }

    public serDelivery(delivery:deliveryOpt ):void{
        this.delivery = delivery
    }

     public checkOut(){
        if(this.product.length === 0){
            throw new Error("cart is empty")
        }
        if(!this.delivery){
            throw new Error("delivery`s method is unknown")
        }
        return{success:true}

     }
}

const cart = new Cart()
cart.addProduct((new Product(1, "cookies", 20)))
cart.addProduct((new Product(2, "oranges", 30)))
cart.deleteProduct(2)
cart.serDelivery(new homeDelivery(new Date(), "address"))

console.log(cart.getSum())
console.log(cart.checkOut())