import { HikariCommand, HikariInterfaces } from "hikari-framework";

export const command: HikariInterfaces.Command = {
    name: "about",
    run: async ({ client, message }) => {
        HikariCommand.aboutCommand(client, message);
    }
};
