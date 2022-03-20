import { createConnection } from "mongoose";

export class HikariDatabase {
    public uri: string;

    constructor(uri = "mongodb://localhost:27017/hikari", init = true) {
        this.uri = uri;

        if (init) {
            this.connect();
        }
    }

    public connect() {
        return createConnection(this.uri);
    }
}
