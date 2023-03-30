class Cat{
    constructor(name, age, isFixed){
        this.name = name;
        this.age = age;
        this.sound = "meow";
        this.isFixed = isFixed;
    }

    makeSound(){
        console.log(this.sound);
    }
    displayInfo(){
        console.log(`The cats name is ${this.name}, and age is ${this.age}. `)
        console.log(`The cat is fixed? ${this.isFixed} and the sound the cat makes is ${this.sound}`);
    }

    giveCatNip(){
        console.log(`${this.name} goes crazy and rolls all over the floor!`)
    }


}

let breCat = new Cat("Miss Kitty", 9, true);
breCat.
breCat.displayInfo();
breCat.sound = "purrrrr";
breCat.displayInfo();

let ryanCat = new Cat("April", 3, true);
ryanCat.displayInfo();
ryanCat.isFixed = false;
ryanCat.displayInfo();

let brentCat = new Cat("Fat Cat", 7, true);
brentCat.giveCatNip();
