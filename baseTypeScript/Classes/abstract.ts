abstract class Controller {
    abstract handle(req:any):void

    handleWithLogs(req:any){
        console.log("start")
        this.handle(req)
        console.log("end")
    }
}

class  UserController extends  Controller {
    handle(req: any) {
        console.log(req)
    }
}

const U = new UserController()
