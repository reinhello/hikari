import { HikariCommand, HikariInterfaces } from "hikari-framework";

export const command: HikariInterfaces.Command = {
    name: "ping",
    run: async ({ message }) => {
        HikariCommand.pingCommand(message);
    }
};
