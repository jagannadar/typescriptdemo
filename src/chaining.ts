type Customer = {
    birth: Date 
};

function getCustomer(id:number): Customer|null {
    return id ===0? null : { birth: new Date()}
}
//chaining 
//optional property access operator
let customer = getCustomer(0)
console.log(customer?.birth?.getFullYear)

