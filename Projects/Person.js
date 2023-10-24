class Person{
  constructor(name, age)
  {
      this.name = name;
      this.age = age;
  }
      introduceself()
  {
      console.log( `my name is ${this.name} and i am ${this.age} year old.`);
  }
  
}
class Student extends Person{
  constructor(name, school)

  {
    super(name);
      this.school = school;
     }
  study()
  {
  console.log(`my name is ${this.name} and i study in ${this.school} `)
}
}
person1 = new Person('isaac', 19);
person2 = new Person('Dan',23);
student1 = new Student( person1.name ,'MOI UNIVERSITY');
student1.study()
