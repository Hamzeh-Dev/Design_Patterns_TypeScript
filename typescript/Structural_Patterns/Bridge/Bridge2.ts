interface Database {
    connect(): void;
    query(sql: string): any;
    close(): void;
}

class PostgreSQLDatabase implements Database {
    connect(): void {
        console.log("Connecting to PostgreSQL");
    }
    query(sql: string) {
        console.log(`Executing query: ${this.query}`);
    }
    close(): void {
        console.log("Closeing connection . . .");
    }
}

class MongoDBDatabase implements Database {
    connect(): void {
        console.log("Connecting to MongoDB");
    }
    query(sql: string) {
        console.log(`Executing query: ${this.query}`);
    }
    close(): void {
        console.log("Closeing connection . . .");
    }
}

abstract class DatabaseService {
    constructor(protected database: Database) {}

    abstract fetchData(query: string): any;
}

class ClientDatabaseService extends DatabaseService {
    fetchData(query: string) {
        this.database.connect();
        this.database.query(query);
        this.database.close();
    }
}

// * Client Code
const postgreSQLService = new ClientDatabaseService(new PostgreSQLDatabase());
postgreSQLService.fetchData("USERS");

const mongoDbService = new ClientDatabaseService(new MongoDBDatabase());
mongoDbService.fetchData("USERS");