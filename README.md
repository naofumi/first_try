# Micro Frontend Study

This is a test website for studying Micro Frontends. It is based on the following article, but much more simplified. 

[Micro Frontends are described in this martinfowler.com article](https://martinfowler.com/articles/micro-frontends.html#TheExampleInDetail)

## What is a Micro Frontend

Wikipedia defines Micro frontends as the following;
* Each micro frontend is independently developed. 
* It is for client-side single-page applications written in JavaScript.
* Tools are module federation (webpack), libraries like Single-SPA, Web Components, or iframes.

Some resources
* [micro-frontends.org](https://micro-frontends.org)
* [The Truth Behind Micro Frontends: Insights from Real Case Studies](https://www.bitovi.com/blog/the-truth-behind-micro-frontends-insights-from-real-case-studies)

There are many examples that claim to be Micro frontends but do not satisfy the first requirement that each micro frontend must be independently developed and deployed.
Importantly, if the container application needs to be rebuilt (or rerun if you are in development), then my understanding is that it is not a micro frontend since deployment is no longer independent.

Moreover, vertically split micro frontends do provide the same benefits. 
However, the technology is extremely old, and it seems odd to [tout this as a new development](https://vercel.com/blog/how-vercel-adopted-microfrontends).
Here, we will only consider horizontally split micro frameworks.

## Gist of what we did

The project consists of three parts.

1. "root" is where everything comes together. This is the page that the user will see and is called the **container application** in the above article. This page pulls in the frontends from the two other parts.
2. "react side" is a micro frontend written in React.
3. "hotwire side" is a micro frontend written in Hotwire.

We also have "root-react" which is a copy of the "root" application, re-written in React.

## What does it mean to be a Micro Frontend?

Similar to microservices on the backend, we placed independent deploy-ability as the key goal.
This means that we should be able to develop and deploy each micro frontend with very little consideration of what version the others are on.
In other words, there should be minimal coordination required between teams.

In practice, we designed this example so that each application can be developed in isolation –
we can run it without running the others.
In particular, we want to avoid [build-time integration](https://martinfowler.com/articles/micro-frontends.html#Build-timeIntegration). 

As mentioned in the article, one hallmark is that neither the component application nor the micro-frontends pull in each other as build dependencies.

## How to get it running

1. CD into the "root" project. Build it with `npm run build`. Then start the server with `npm run preview`. Leave this running.
2. CD into the "react-side" project. Build it with `npm run build`. Then start the server with `npm run preview`. Leave this running. Alternatively, if you are only running the "react-side" project during development, then you can run `npm run dev` and view this micro frontend in isolation. 
3. CD into the "hotwire-side" project. Build it with `npm run build`. Then start the server with `npm run preview`. Leave this running. Alternatively, if you are only running the "hotwire-side" project during development, then you can run `npm run dev` and view this micro frontend in isolation.
4. Access the "root" project. This should pull in files from the "react-side", "hotwire-side" and display the page. 

Notes: 
For integration testing where you load in the "react-side" and "hotwire-side" into the "root" project, you must use production builds of the "react-side" and "hotwire-side".
In other words, the development server versions of "react-side" and "hotwire-side" should be used for independent development of each micro-frontend but cannot be used in integration.

## Setup notes

For convenience, we have included `.env` files into the repository. Override environment variables in deployment as necessary.

## Demo

1. ["root-react" container application](https://microfrontend-root-react.vercel.app)
2. Micro-frontends: ["react-site"](https://microfrontend-react-site.vercel.app), ["hotwire-side](https://microfrontend-hotwire-side.vercel.app)

## Code

[GitHub](https://github.com/naofumi/microfrontend-study)

## How it works

![microfrontend.png](microfrontend.png)

### React side

The React side builds a JavaScript file that contains the "react-side" application.
When this JavaScript is loaded in the "container" application, 
it is inserted into the `root#react-root` element in `index.html`. 
CSS is also loaded.

The build will generate a manifest file so that the "root" application can look up the filenames of the latest versions.

### Hotwire side

Hotwire is a combination of HTML and JavaScript. We need to pull in both. 

The "root" container application will pull in HTML from the "hotwire-side" applications using `turbo-frames`.
This will require CORS settings, which are provided in `vercel.json` for Vercel deployment.
The container application will also pull in the JavaScript and CSS from the "hotwire-side" application. 

The build will generate a manifest file so that the "root" application can look up the filenames of the latest versions.

### Root: Container app

This container application will pull in the files required for showing the "react-side"
and the "hotwire-side" micro-frontends.
It will first read the manifest files from the frontends and request the latest file versions. 

The container application has an elementary client-side router to switch between pages depending on the browser URL.
Each page will pull in the micro-frontends that it needs.

In addition to the vanilla JavaScript version of the root application, we also have a React version ("root-react").
The React version makes it easier to do a "multi-page" SPA, 
and so we will move towards this and remove the vanilla JavaScript version in the future.

### Root-React: Container app in React

This is basically a copy of the "container" application, but we have added client-side routing and a bit of polish.

Find a description of the client-side routing below.

### Client-side routing

This is loosely based on the [example on martinfowler.com](https://martinfowler.com/articles/micro-frontends.html#TheExampleInDetail).

Key points:

* We need to turn off Turbo because this will interfere with routing. We will do page transitions with a full-page reload ("hard navigation").
* We need two routers
   * On the container application side, we need to change the page layout when the route changes. The first router, therefore, is in the container application. In the current case, the "/detail" path should just show the "react-site" and not show the "hotwire-site". We also change the page heading.
   * The container application does not manage the state of the "react-site". It is up to the "react-site" to show the appropriate page for the "/detail" path.
   * The "react-site" application has a second router. It looks up the current URL and shows the page for this path.
   * The reason for doing it this way is to allow for independent development of the "react-site", without requiring it to be loaded from the container application.
   * Alternatively, we could make the container application process the URL and send that information down to the "react-site". This method, however, would require that we also implemented something similar on the "react-site" to allow for independent development and would require redundancy.

### State management

In this example, the URL is the only state shared between the micro-frontend and the container application.
Either the client side reads the URL directly,
or the component application sends a request that is directly derived from the URL.

* The "react-site" micro-frontend has its own client-side router and will read the browser URL pathname and show the appropriate page.
* The "hotwire-side" micro-frontend is an MPA. The container application will parse the browser URL and request the appropriate HTML file based on this.

### CORS

* Cross-origin Turbo Frames requests require preflights.

## Main differences compared to the article

* We don't use React Router but use our own elementary client-side router. Our solution only works with hard-navigation (a full page reload for each page transition).
* We don't have to worry about unmounting since we only do hard-navigation.

## Handling layout shift

The micro-frontend architecture loads content from various locations which will each arrive independently.
This will cause layout shift,
where newly arriving content will push existing elements out of where the new element should be placed.

Layout shift tends to make a website look fidgety and cheap.
To partially mitigate this, we have put in page layout animations so that the early layouts will not be visible.

## What's new about Micro Frontends

### Old stuff

* iframes
* Vertical segmentation but path – each path directing to a separate app
* SSI (server side includes)

These technologies are uninteresting since they are so old. The only place where they might be somewhat new is how each micro frontend communicates.

### New stuff

* Loading micro frontends as JavaScript
* Integrating micro frontends in a single DOM, allowing for more flexibility.
