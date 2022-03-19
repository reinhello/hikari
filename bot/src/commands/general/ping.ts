import { Interfaces } from "hikari-framework";

export const command: Interfaces.Command = {
    name: "ping",
    run: async (payload) => {
        payload.message.channel.createMessage({ content: "Pong!" });
    }
};
