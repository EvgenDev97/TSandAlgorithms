class Vehicle {
    public make:string;
    private damages:string[]
    private _model:string;
    protected run:number;
    #price:number // js private property

    set model(m:string){
        this._model =m
    }

    get model(){
        return this._model
    }
    private addDamage(damage:string){
        this.damages.push(damage)
    }
}

class EuroTrack extends Vehicle{
    setRun(km:number){
        this.run = km / 0.62
    }
}

