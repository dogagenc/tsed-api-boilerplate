# tsed-api-boilerplate

> An awesome project based on Ts.ED framework

See [Ts.ED](https://tsed.io) project for more information.

## Build setup

> **Important!** Ts.ED requires Node >= 10, Express >= 4 and TypeScript >= 3.

```batch
- Start mongo

- Install dependencies
$ yarn install

- Serve
$ yarn start

- Build for production
$ yarn build
$ yarn start:prod
```

# Docker

```batch
- Dev
$ docker start mongo
$ yarn start


- Production
$ yarn build
$ docker-compose up
```
