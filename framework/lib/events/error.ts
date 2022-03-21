import { Event } from "../interfaces";
import { Logger } from "../util";

export const event: Event = {
    name: "error",
    run: (client, err: string, id: number) => {
        const logger = new Logger();

        logger.error({ message: err, subTitle: "HikariFramework::Gateway", title: `SHARD ${id ? id : "N/A"}`, type: "ERROR" });
    }
};
