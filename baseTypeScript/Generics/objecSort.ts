interface Id {
    id: number
}

const data = [

    {id: 2, name: 'Петя'},

    {id: 1, name: 'Вася'},

    {id: 3, name: 'Надя'},

]

const objSort = <T extends Id>(data: T[], type: "asc" | "desc"): T[] => {
    return data.sort((a, b) => {
        switch (type) {
            case "asc":
                return a.id - b.id;
            case "desc":
                return b.id - a.id
        }
    })
}

type sortType = "asc" | "desc"
const sort =<T extends Id> (data:T[],type:sortType ):T[] => {
    return data.sort((a,b) =>type == "asc"? a.id - b.id : b.id - a.id )
}
