interface Ilogger {
    log(...args:unknown[]) :void
    error(...args:unknown[]):void
}

class Logger implements Ilogger{
    log(...args: unknown[]): void {
        console.log(...args)
    }

    async error(...args: unknown[]): Promise<void> {
        throw  new Error("error")
    }

}

interface IPaybal {
    pay(paymentId:number):void;
    price?:number
}

interface Ideletable{
    delete():void
}

class Persone implements IPaybal, Ideletable{
    delete(): void {
    }
    pay(paymentId: number | string): void {

    }

    price: number;

}

