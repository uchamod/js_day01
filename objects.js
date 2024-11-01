class Person{
    constructor(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    showinfo = () => {
        console.log(this.name, this.age, this.hobbies);
    }
    //getter
    get name() {
        return this._name;
    }
    //setter
    set name(input) {
        this._name ="Mr."+ input;
    }
}

let amal = new Person("aml", 30, ["cricket", "football", "volyball"]);
//inheretance
class Student extends Person{
    constructor(name, age, hobbies, address) {
        super(name, age, hobbies);
        this.address = address;
    }
    showhobbies = () => {
        console.log(this.hobbies);
        }
}
//let kaml = new Student(["gg","jj"],"ss","hobby");
let kaml = new Student("saman",20,["do","did","done"],"matara");
amal.showinfo();
kaml.showhobbies();
console.log(kaml.address);

kaml.name = "janith";
console.log(kaml.name);

//assign key word
let object1 = {
    name: "chamod",
    age: 20,
    showinfo: function () {
        console.log("My name is " +this.name+ " and age is " + this.age);
    }
}

let object2 = {
    name: "arun",
    age : 25,
}
Object.assign(object2, object1);
object2.showinfo();