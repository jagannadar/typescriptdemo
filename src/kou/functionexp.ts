function add(num1:number,num2?:number) : number
function add(num1:string,num2:string) : string

function add(a: any, b: any): any{
    return a+b;
}
console.log(add(2,3))
console.log(add('f','k'))
