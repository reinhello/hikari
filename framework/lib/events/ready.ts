import { Event } from "../interfaces";
import { GuildModel } from "../models";
import { Logger } from "../util";
import { HikariMongoModels } from "../commands";

export const event: Event = {
    name: "ready",
    run: (client) => {
        const logger = new Logger();
        const guilds = client.guilds.map((guild) => guild.id);

        if (client.ready) {
            logger.info({ message: `${client.user.username}#${client.user.discriminator} Connected`, subTitle: "HikariFramework::Gateway", title: "CLIENT READY", type: "INFO" });
        }

        if (client.database) {
            logger.info({ message: "Connected To Database", subTitle: "HikariFramework::Database", title: "MONGODB", type: "INFO" });
        } else {
            logger.error({ message: "Unable To Connect To Database", subTitle: "HikariFramework::Database", title: "MONGODB", type: "ERROR" });
        }

        // Create database for guild
        for (let i = 0; i < guilds.length; i++) {
            const model = GuildModel.createModel(client.database);

            if (model.findOne({ id: guilds[i] } )) {
                HikariMongoModels.createGuildModel(client.database, {
                    createdAt: new Date(),
                    id: guilds[i],
                    name: client.guilds.get(guilds[i]).name,
                    settings: {
                        prefix: client.config.BOT.PREFIX
                    }
                });
            }
        }
    }
};
