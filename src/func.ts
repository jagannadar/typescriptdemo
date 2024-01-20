function calTax(income:number, taxYear?:number):number{
    if((taxYear||2011)<2012)
    return income*2000;
    return income*10000;

}

calTax(10_000)