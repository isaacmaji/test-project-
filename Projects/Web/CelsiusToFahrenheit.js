class Tempretureconverter{
    constructor(celsius,fahrenheit)
    {
        this.celsius = celsius;
        this.fahrenheit = fahrenheit;
    }
    celsiustofahrenheit()
    {
    return((this.celsius * 9/5) + 32);
    }
    fahrenheittocelsius()
    {
    return ((this.fahrenheit - 32) * 5/9)
    }
    }
   
    const convertertype = prompt("Enter CF if you want Celsius to Fahrenheit else enter FC: ").toUpperCase();
    if (convertertype === 'CF')
    {
    let celsius = prompt("Enter degree in celsius: ")
        let calculate = new Tempretureconverter(celsius)
    let temp = calculate.celsiustofahrenheit()
        console.log("Celsius To Fahrenheit: ", temp);
    }
    else if(convertertype === 'FC'){
    let fahrenheit = parseFloat(prompt("Enter degree in fahrenheit: "));
     let calculate = new Tempretureconverter(null,fahrenheit)
    let temp = calculate.fahrenheittocelsius()
        console.log("Fahrenheit To Celsius: ", temp);
    }
    else{
        console.log("INVALID INPUT");
    }
   
    