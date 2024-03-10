// const skill:string[] = ["str1", "str2", 'str3', 3] // error

const skill:[number,string] = [1,"Dev"] //tuple  - array of limited length
const id = skill[0]
const skillName = skill[1]
//array methods working with tuples
const [ids, skillNames] = skill // destruct
const array:readonly [number,string, ...boolean[]] = [1,"Dev", true,false,false] //
