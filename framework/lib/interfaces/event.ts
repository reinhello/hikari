import { ClientEvents } from "eris";
import { HikariClient } from "../client";

interface EventRun {
    (client: HikariClient, ...args: any);
}

export interface Event {
    name: keyof ClientEvents;
    run: EventRun;
}
