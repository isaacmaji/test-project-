let celsius = prompt("Enter the degree in celsius: ")
class Tempretureconveter{
constructor(celsius)
{
    this.celsius = celsius;
}
conveter()
{
return((this.celsius * 9/5) + 32);
}
}
const calculate = new Tempretureconveter(celsius);
temp = calculate.conveter()
console.log("Celsius to Fahrenheit :",temp);