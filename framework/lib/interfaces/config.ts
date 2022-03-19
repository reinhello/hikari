interface ConfigAPI {
    BASE_URL: string;
    DISCORD_AUTH: ConfigAPIDiscordAuth;
}

interface ConfigAPIDiscordAuth {
    CLIENT_ID: string;
    CLIENT_SECRET: string;
}

interface ConfigBot {
    ADMIN: Array<string>;
    PREFIX: string;
    TOKEN: string;
}

export interface Config {
    API: ConfigAPI;
    BOT: ConfigBot;
}
