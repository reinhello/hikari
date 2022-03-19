import { Event } from "../interfaces";
import { Logger } from "../util";

export const event: Event = {
    name: "ready",
    run: (client) => {
        const logger = new Logger();

        if (client.ready) {
            logger.info({ type: "INFO", title: "CLIENT READY", subTitle: "HikariFramework::Events", message: `${client.user.username}#${client.user.discriminator} Connected` });
        }
    }
};
