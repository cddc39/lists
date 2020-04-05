# Lists

Lists makes simple lists to be used.

## Getting started

For local development, install and start the server:

```sh
cd "lists"
npm install
npm start
```

To build a static site for serving:

```sh
npm run build
```

To build the static site into a container that can serve:

```sh
docker build -t cddc39.tech/lists .
docker run --rm -it cddc39.tech/lists
```
