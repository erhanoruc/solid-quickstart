# SolidStart

![solid (3)](https://user-images.githubusercontent.com/43764894/199539679-a1b9fbcb-3ec5-4fd7-b2d9-5cc25b248295.png)



A Solid Quickstart template that will get you started with everything you need to build a Solid project, powered by [`solid-start`](https://github.com/ryansolid/solid-start/tree/master/packages/solid-start);

Click the below button to quickly create a new repo, create a new Netlify project, and deploy!

[![Deploy to Netlify Button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify-templates/solid-quickstart?utm_campaign=template-team&utm_source=dtn-button&utm_medium=dtn-button&utm_term=solid-qt-dtn-button&utm_content=solid-qt-dtn-button)

## Table of Contents
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Building](#building)
- [Deploying using the Netlify CLI](#deploying-using-the-netlify-cli)

## Project Structure

Inside of your Solidjs project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Counter.css
│   │   └── Counter.tsx
│   └── routes/
│       └── [...404].tsx
│       └── index.tsx
├── entry-client.tsx
├── entry-server.tsx
├── root.css
├── root.tsx
├── package.json
└── vite.config.json
```

## Getting Started

If you want to get started locally, you can clone the project, install the dependencies and run the dev command!

```
git clone https://github.com/netlify-templates/solid-quickstart.git
cd solid-quickstart
npm install
npm run dev
# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.

## Deploying using the Netlify CLI
- Install the Netlify CLI globally `npm install netlify-cli -g`
    
- Run `npm run build`

- Then use the `netlify deploy` for a deploy preview link or `netlify deploy --prod` to deploy to production

Here are a few other ways you can deploy this template:
    
- Use the Netlify CLI's create from template command `netlify sites:create-template solid-quickstart` which will create a repo, Netlify project, and deploy it
    
- If you want to utilize continuous deployment through GitHub webhooks, run the Netlify command `netlify init` to create a new project based on your repo or `netlify link` to connect your repo to an existing project

Hope this template helps :) Happy coding 👩🏻‍💻!

## Mini Kart (Localhost)

Bu repoda bağımsız bir mini yarış oyunu eklendi: `public/mario-kart/index.html`.

Bağımlılık kurmadan hızlıca oynamak için:

```bash
cd public/mario-kart
python3 -m http.server 4173
```

Ardından tarayıcıda `http://127.0.0.1:4173` açın.

