class UserNine{
    _login:string;
    password:string

    set login(l:string | number){
        this._login = "user-" + l
    }

    get login(){
        return this._login
    }

    // if no set - get will be read only
    /// set get - no async
}

const userNine = new UserNine()
userNine.login ="MyLogin"
console.log(userNine)
console.log(userNine.login)