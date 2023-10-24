let weight = prompt("Enter weight in kilogram:");
let height = prompt("Enter height in meters:");

class BMICALCULATOR {
    constructor(weight, height){
        this.weight = weight;
        this.height = height;
    }
    calculateBMI()
    {
    return this.weight/(this.height*this.height)
    }
category(){
const BMI = this.calculateBMI();
if (BMI < 18.5) {
      return "Underweight";
    } else if (BMI < 24.9) {
      return "Normal Weight";
    } else if (BMI < 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
}
}
const calculate = new BMICALCULATOR(weight,height)
const BMI = calculate.calculateBMI()
const BMIcategory = calculate.category()

console.log("YOUR BMI IS:",BMI,BMIcategory);