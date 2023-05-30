class Cat { 
    constructor (name,age){
        this.name = name 
        this.age = age ;
       }
       speak() {
            return `${this.name} says meow!`
        }}


class Dog {
    constructor (name,age){
        this.name = name 
        this.age = age 
    } speak() {
        return `${this.name} says woof!`
    }


}

class Bird {
    constructor (name,sex){
        this.name = name 
        this.sex = sex
    }
    speak(){
      if (this.sex === 'male'){return `It's me! ${this.name}, the parrot!`}
      else return `${this.name} says squawk!`}}
       

let cat = new Cat("Sasha","female")
//console.log(cat.speak())
let dog = new Dog("Rufio","male")
let bird1 = new Bird("Pablo", "male")
let bird2 = new Bird("Mable", "female")
console.log(bird2.speak())