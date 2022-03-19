import { ActivityPartial, BotActivityType, Client, Status } from "eris";
import { Collection } from "./util";
import { Command, Config, Event } from "./interfaces";
import { join } from "path";
import { readdirSync } from "fs";

interface InitClientOptions {
    presence?: {
        status: Status;
        activities?: ActivityPartial<BotActivityType> | ActivityPartial<BotActivityType>[];
    }
}

export class HikariClient extends Client {
    public commands = new Collection<Command>();

    public config: Config;

    public events = new Collection<Event>();

    public initAllEvents() {
        this.initCommands();
        this.initMessageCreateEvent();
        this.initReadyEvent();
    }

    public initClient(options: InitClientOptions) {
        this.connect();

        if (options.presence) {
            this.editStatus(options.presence.status, options.presence.activities);
        }
    }

    public initCommands() {
        const commandPath = join(__dirname, "..", "..", "bot", "src", "commands");

        readdirSync(commandPath).forEach(async (dir) => {
            const commands = readdirSync(`${commandPath}/${dir}`).filter((file) => file.endsWith(".ts"));

            for (const file of commands) {
                const { command } = await import(`${commandPath}/${dir}/${file}`);

                this.commands.set(command.name, command);
            }
        });
    }

    public async initMessageCreateEvent() {
        const path = join(__dirname, "events", "messagecreate.js");
        const { event } = await import(path);

        this.on(event.name, event.run.bind(null, this));
    }

    public async initReadyEvent() {
        const path = join(__dirname, "events", "ready.js");
        const { event } = await import(path);

        this.on(event.name, event.run.bind(null, this));
    }
}
