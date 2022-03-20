import { HikariCommand, Interfaces } from "hikari-framework";

export const command: Interfaces.Command = {
    name: "about",
    run: async ({ client, message }) => {
        HikariCommand.aboutCommand(client, message);
    }
}