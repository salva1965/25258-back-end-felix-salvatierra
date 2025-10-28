function User(name,age) {
    this.nombre = name;
    this.edad = age;
    this.admin= false;
    this.saludar = function() {
        console.log(`soy ${this.nombre} mi edad es ${this.edad}`);
    }
}

const user1 = new User("juan",33);
const user2 = new User("maria",24);

console.log(user1,user2);
user2.saludar();
user1.saludar();