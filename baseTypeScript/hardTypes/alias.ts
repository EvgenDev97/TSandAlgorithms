type httpMethod ="post" | "get";
function fetchAuth(url:string, method:httpMethod){

}

type User ={
    name:string;
    age:number;
    skills: string[]
}

type Role = {
    name:string,
    id:number,
}

type UserWithRole = User & Role // alias intersection

let user:UserWithRole = {
    name:"beaver",
    age:22,
    skills:["devOps, devSecOps"],
    id:1
}