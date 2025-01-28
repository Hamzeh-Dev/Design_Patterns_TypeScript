
class User {
    constructor(name: string, email: string) {}
}

class UserAuth {
    constructor(user: User) {}

    authenticate(password: string) {
        console.log(password);
    }
}