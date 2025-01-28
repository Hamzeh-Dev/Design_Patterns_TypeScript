
// ! Wrong Code ( This Code Violate DIP )
// class MyDatabase {
    // save(data: string): void {
    //     console.log(data);
    // }
// }

// class HighLevelModule {
//     constructor(private db: MyDatabase) {}

//     execute(data: string): void {
//         this.db.save(data);
//     }
// }



// * Correct Code
interface IDatabase {
    save(data: string): void;
}

class MyDatabase implements IDatabase {
    save(data: string): void {
        console.log(data);
    }
}

class SQLDatabase implements IDatabase {
    save(data: string): void {
        console.log(data);
    }
}

class HighLevelModule {
    constructor(private db: IDatabase) {}

    execute(data: string): void {
        this.db.save(data);
    }
}


let mydb = new MyDatabase();
let sqldb = new SQLDatabase();

let user: HighLevelModule = new HighLevelModule(mydb);
user.execute("john");

let post: HighLevelModule = new HighLevelModule(sqldb);
post.execute("new post");
