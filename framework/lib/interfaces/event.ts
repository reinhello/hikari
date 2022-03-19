import { HikariClient } from "../client";
import { ClientEvents } from "eris";

interface EventRun {
    (client: HikariClient, ...args: any);
}

export interface Event {
    name: keyof ClientEvents;
    run: EventRun;
}
