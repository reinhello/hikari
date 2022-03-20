import { Event } from "../interfaces";
import { Logger } from "../util";

export const event: Event = {
    name: "error",
    run: (client, err: string, id: number) => {
        const logger = new Logger();

        logger.error({ message: `Shard ${id ? id : "N/A"}:${err}`, subTitle: "HikariFramework::Gateway", title: "CLIENT ERROR", type: "ERROR" });
    }
};
