class User {
    constructor(email,password) {
        this.email = email;
        this.password = password;
    }
    saludar() {
        console.log(`Mi correo es ${this.email}`);
    }
}

const user = new User("userx@x.com",1234);
//console.log(user);

class Admin extends User {
    constructor(email,password,codigo) {
        super(email,password);
        this.codigo = codigo;
    }
}

const admin =new Admin("adminx@x.com",12345,"abc34");
console.log(admin);
admin.saludar();