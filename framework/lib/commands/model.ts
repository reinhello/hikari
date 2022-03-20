import { Connection } from "mongoose";
import { GuildModel } from "../models";

export function createGuildModel(connection: Connection, body: GuildModel.Guild) {
    const model = GuildModel.createModel(connection);

    model.create(body);
}
