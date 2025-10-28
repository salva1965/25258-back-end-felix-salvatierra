class User {
    constructor(name,age) {
        this.nombre = name;
        this.edad = age;
        this.admin = false;


    }

    saludar() {
        console.log(`soy ${this.nombre} mi edad es ${this.edad}`);
    }
}
const user1 = new User("juan",33);
console.log(user1);
user1.saludar();