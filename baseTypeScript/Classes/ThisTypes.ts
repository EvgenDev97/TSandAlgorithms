class UserBuilder {
    name:string
    setName(name:string):this {
        this.name = name
        return this;
    }

    isAdmin(): this is AdminBuilder {
        return this instanceof  AdminBuilder
    }
}

class  AdminBuilder extends  UserBuilder {
    // roles:string[]

}

const  result = new UserBuilder().setName("Name")
const  resultAdmin = new AdminBuilder().setName("NameTwo")

let use: UserBuilder | AdminBuilder = new UserBuilder()

if(use.isAdmin()){
    console.log(use)
}else{
    console.log(use)
}