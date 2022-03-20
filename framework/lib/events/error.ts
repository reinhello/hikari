import { Event } from "../interfaces";
import { Logger } from "../util";

export const event: Event = {
    name: "error",
    run: (client, err: string, id: number) => {
        const logger = new Logger();

        logger.error({ type: "ERROR", title: "CLIENT ERROR", subTitle: "HikariFramework::Gateway", message: `Shard ${id ? id : "N/A"}:${err}`});
    }
}