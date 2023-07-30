# starter-deno-web

A [Deno](https://deno.land/) web project stater template.

## Features

- [Oak](https://oakserver.github.io/oak/), with middleware Logger, CORS and JWT
- MongoDB

## Environment variables

Please set these environments variables  before running:

```shell
# timezone offset in minutes, default: 0
TIMEZONE_OFFSET = ""

# base64 encoded ES256 key pair for JWT, run `deno task keygen` to generate them randomly
JWT_KEY_PUBLIC = ""
JWT_KEY_PRIVATE = ""

# MongoDB URI
DB_URI = ""
```

The environment variables without default values are required.

You can create an file named `.env` in the root directory of this project, and set these environment variables in it. `src/config.ts` will load environment variables from file `.env`.

## License

MIT License © 2023 mys1024
