class Us {
    skills:string[]

    addSkill(skill:string ):void;
    addSkill(skills:string[]):void;
    addSkill(skillOrSkills: string | string[]){
        if(typeof skillOrSkills === "string"){
            skills.push(skillOrSkills)
        }else{
            skills.concat(skillOrSkills)
        }
    }
}

new Us().addSkill("")

function run(distanceNumber:number):void
function run(distanceString:string):void
function run(distance: number |string): number | string{
    if(typeof distance === "number"){
        return distance
    }else{
        throw  new Error("Some Error")
    }
}
run(5)