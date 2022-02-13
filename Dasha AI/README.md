# How to start the demo app

This example shows how to build conversational IVR on top of Dasha. If you need any help, join us in our [Developer Community](https://community.dasha.ai).

1. Install the dependencies:

```sh
npm install
```

2. Create or log into your account using the Dasha CLI tool:

```sh
npx @dasha.ai/clie account login
```

3. To start a text chat, run:

```sh
npm start chat
```

4. To receive a phone call from Dasha, run:

```sh
npm start <your phone number>
```

The phone number should be in the international format without the `+` (e.g. `12223334455`)