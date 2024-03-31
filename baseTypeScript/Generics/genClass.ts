class Resp<D,E> {
    data?:D;
    error?:E;

    constructor(data?:D, error?:E) {
        if(data) this.data = data;
        if(error) this.error = error;
    }
}

const A = new Resp <string,number>("data", 200)


class HTTPResp <F> extends Resp<string, number>{
    code:number | F

    setCode(code:number){
        this.code = code
    }
}

const http = new HTTPResp()
