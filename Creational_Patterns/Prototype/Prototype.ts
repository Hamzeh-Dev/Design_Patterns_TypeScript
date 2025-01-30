
interface UserDetails {
    name: string;
    age: number;
    email: string;
}

interface Protortype {
    clone(): Protortype;
    getUserDetails(): UserDetails;
}

class ConcretePrototype implements Protortype {
    constructor(private user: UserDetails) {}

    public clone(): Protortype {
        const clone = Object.create(this);
        clone.user = { ...this.user };
        return clone;
    };

    public getUserDetails(): UserDetails {
        return this.user;
    }
}

let user1 = new ConcretePrototype({name: "User 1", age: 22, email: "user1@user.com"});

let user2 = user1.clone();

if (user1 === user2) {
    console.log("Both instances are the same");
} else {
    console.log("Instances are not the same");
}

console.log("User 1", user1);
console.log("User 2", user2);
