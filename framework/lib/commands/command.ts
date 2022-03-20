import { HikariClient } from "../client";
import { Message, TextableChannel } from "eris";
import { RichEmbed } from "../util";

export function aboutCommand(client: HikariClient, message: Message<TextableChannel>) {
    const embed = new RichEmbed()
        .setAuthor(client.user.username)
        .setColor(message.member.guild.roles.get(message.member.roles[0]).color)
        .setDescription("Hello world")
        .setTitle("About Me");

    return message.channel.createMessage({
        embed,
        messageReference: {
            messageID: message.id
        }
    });
}

export function pingCommand(message: Message<TextableChannel>) {
    const embed = new RichEmbed()
        .setColor(message.member.guild.roles.get(message.member.roles[0]).color)
        .setDescription(`🏓 Pong! | ${message.member.guild.shard.latency}ms`);

    return message.channel.createMessage({
        embed,
        messageReference: {
            messageID: message.id
        }
    });
}
