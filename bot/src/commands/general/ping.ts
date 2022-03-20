import { HikariCommand, Interfaces } from "hikari-framework";

export const command: Interfaces.Command = {
    name: "ping",
    run: async ({ message }) => {
        HikariCommand.pingCommand(message);
    }
};
