import { HikariClient, Interfaces } from "hikari-framework";
import * as Config from "../../config/config.json";

const client = new HikariClient(`Bot ${Config.BOT.TOKEN}`);

client.config = Config as Interfaces.Config;
client.initClient({
    presence: {
        status: "dnd",
        activities: {
            name: "Hikari Nightly",
            type: 0
        }
    }
});
client.initAllEvents();
