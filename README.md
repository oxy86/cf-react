# Serverless React app on Cloudflare Workers

In this example project, we use [Wrangler](https://github.com/cloudflare/wrangler) and [Cloudflare Workers](https://developers.cloudflare.com/workers/get-started/guide) to deploy and serve a static site developed in [React](https://reactjs.org/) (bootstrapped with [Create React App](https://github.com/facebook/create-react-app)).  

Cloudflare Workers is a great platform to deploy static sites: the application will be distributed to hundrends of locations around the world, and served directly from Cloudflare’s CDN at a server incredibly close to your users.
 
To reproduce this project read my blog post [Serverless: How to create and serve a static React site directly from Cloudflare’s CDN using Workers](https://dimitris.apeiro.gr/2021/07/17/serverless-how-to-create-and-serve-a-static-react-site-directly-from-cloudflares-cdn-using-workers/)

Alternatively, if you already have signed up for a CF Workers account, installed Node.js and the `wrangler` tool, you can just clone this repo in your local computer, edit `wrangler.toml` to update it your CF account id, then 

`npm build` 

and 

`wrangler publish`

to publish it. Just like that, you will have your serverless React app running on Cloudflare.

