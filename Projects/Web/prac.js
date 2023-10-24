const people = [{firstname : 'isaac' , lastname: 'maji' },
                {firstname: 'henry', lastname: 'kiplagat'},
                {firstname: 'collins', lastname: 'ocholla'},
                {firstname: 'ezar', lastname: 'cherioyut'}
                ];

                const employee = [
                    { name: 'Alice', age: 28, city: 'New York' },
                    { name: 'Bob', age: 30, city: 'San Francisco' },
                    { name: 'Charlie', age: 30, city: 'Los Angeles' },
                    { name: 'David', age: 25, city: 'Chicago' },
                    { name: 'Eva', age: 35, city: 'Boston' },
   ]
   
  
  /* const ages = employee.filter(function(employee){
    if (employee.age === 30){
        return true
    }
   })
const ages = employee.filter( employee => employee.age ===30)*/

 const Employeenames =  employee.map(employee=>employee.name)

const sortAge = employee.sort((a,b) => a.age >= b.age ? -1 : 1)
const result = employee.forEach(function(employee){
    console.log(employee.age) 
 })
 const age = employee.filter(employee => employee.age >=30)
 console.log(age)
  
  const ageMap = employee.map(employee => employee.age)
  console.log(ageMap)
  
  const sortAge = employee.sort((a,b)=> a.age >= b.age ? 1 :-1)
  console.log(sortAge)
  
  const sumAge = employee.reduce((total, employee) => total+ employee.age,0)
  console.log(sumAge)cs

const sumAge = employee.reduce((total ,employee) => total + employee.age, 0)
console.log(sumAge);