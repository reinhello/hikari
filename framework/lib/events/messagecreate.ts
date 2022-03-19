import { Message, TextableChannel } from "eris";
import { Event } from "../interfaces";
import { Logger } from "../util";

export const event: Event = {
    name: "messageCreate",
    run: (client, message: Message<TextableChannel>) => {
        if (!message.content.startsWith(client.config.BOT.PREFIX) || message.author.bot) return;

        const messageArray = message.content.split(" ");
        const args = messageArray.slice(1);
        const commandName = messageArray[0].slice(client.config.BOT.PREFIX.length);
        const command = client.commands.get(commandName);
        const logger = new Logger();

        if (!command) return;

        if (command.adminOnly && !client.config.BOT.ADMIN.includes(message.author.id)) return;

        if (command) {
            logger.info({ type: "INFO", title: "COMMANDS", subTitle: "HikariFramework::MessageHandler", message: `${message.author.username}#${message.author.discriminator} (${message.author.id}) Runs ${command.name} In ${message.member.guild.name} (${message.guildID})` });
            return command.run({ client, message, args });
        }
    }
};
