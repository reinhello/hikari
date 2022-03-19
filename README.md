# Hikari

- **This project is still under the development. Please don't do anything stupid!**

**Hikari** is one of my extension project. It is included as:

- [Hikari API](https://github.com/reinhello/hikari/tree/master/api) ([Express](https://github.com/expressjs/express))
- [Hikari Discord Bot](https://github.com/reinhello/hikari/tree/master/bot) ([Eris](https://github.com/abalabahaha/eris))
- [Hikari Framework](https://github.com/reinhello/hikari/tree/master/framework)
- [Hikari Web](https://github.com/reinhello/hikari/tree/master/web) ([Vue](https://github.com/vuejs/core))

The API is **NOT** publicly accessible to the community.

## Developing

**Node v16 is recommended to run**

Before you begin, make sure to clone the repository and fill out the configuration file (`config/config.json`). Some configuration may be optional but they may not be working at all if you leave them as blank.

**Make sure that you have these following tools before running the bot**:

- [MongoDB](https://mongodb.com)

### Discord Bot


```bash
cd ./framework
npm ci
npm run build

cd ../bot
npm ci
npm start
```

Once you run these commands, the bot will start to connecting to Discord gateway and come online.

### Hikari Frontend Website

```bash
cd ./api
npm ci
npm start

cd ../web
npm ci
npm start
```

This including running both the API and the frontend web. The API will be running on port 80 and the Vue server will be running on port 8080.

### Additional Commands

These are the additional commands used to test, improve, and fix the code style:

```bash
npm run lint # Run an ESLint checks
npm run lint:fix # Run an ESLint fix
npm run test # Test the Vue components (only for Hikari Frontend Web)
```