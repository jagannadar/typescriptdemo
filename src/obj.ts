type Employee = {

    id:number,
    name:string,
    retire: (date: Date) => void

}

let emp: Employee  = {id: 1, name: 'Jag',
retire: (date: Date)=>{ 
    console.log(date)
}}