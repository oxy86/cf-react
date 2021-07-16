# What is this

In this example project, we use [Wrangler](https://github.com/cloudflare/wrangler) and [Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide) to deploy and serve a static site developed in React JS. 
Cloudflare Workers is a great platform to deploy static sites: the application will be distributed to hundrends of locations around the world, and served directly from Cloudflare’s CDN at a server incredibly close to your users.

Note: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

See video tutorial: https://www.youtube.com/watch?v=6YC3MgVwCGA


# Steps to reproduce this project

This assumes you have installed npm. It is recommended to install it with a Node version manager like `nvm`, which puts the global `node_modules` in your home directory to eliminate permissions issues with `npm install -g`. 
Next install the wrangler CLI tool to be able to use Workers:

`npm i @cloudflare/wrangler -g`

Then login:

wrangler config

## Create a static site

`npx create-react-app cf-react`

The create-react-app will create a new project (i.e. `cf-react`), and include all the relevant dependencies needed to build the project.

## Generate a project

 Enter the newly-created React project folder, and use the following command to generate a Workers Sites configuration for your project:

 `wrangler init --site`

The init --site command will provide the scaffolding necessary to deploy your React application. For the majority of static sites, you shouldn’t need to change the Workers script: by default, the script will look at an incoming request, and will serve a corresponding asset from [Workers KV](https://www.cloudflare.com/products/workers-kv/) based on that route. For instance, if my static site is deployed at mystaticsite.com, requesting mystaticsite.com/about.html will look for a file in KV called about.html, and serve it back to the client. In addition, if the asset being returned from KV is cacheable, it will automatically be cached with Cloudflare’s CDN, making subsequent requests even faster.

To serve a single page application, update workers-site/index.js with the following code to so that all html requests are pointed at your root index.html file.

```javascript
import { getAssetFromKV, serveSinglePageApp } from '@cloudflare/kv-asset-handler';
async function handleEvent(event) {   
    ...   
    const asset = await getAssetFromKV(event, { mapRequestToAsset: serveSinglePageApp });
}
```

## Configure and publish

The bucket key in the wrangler.toml indicates the “build” folder that Sites will deploy to Workers. 
While many front-end application and static site generators use the folder public, `create-react-app` uses the folder `build`. So, we need to change the `bucket` key in wrangler.toml to `build`:

```yaml
wrangler.toml
# ... previous wrangler config
[site]
bucket = "./build"
entry-point = "workers-site"
```

With wrangler.toml configured, it’s time to build the project, and publish it to Workers. Run npm `run build` to tell create-react-app to build the site, and `wrangler publish` to deploy it to Workers:

```bash
npm run build

wrangler publish
```


# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
