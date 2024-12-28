# Micro Frontend Test

This is a trial to get the feel of Micro Frontends. It is based on the following article. 

[Micro Frontends are described in this martinfowler.com article](https://martinfowler.com/articles/micro-frontends.html#TheExampleInDetail)

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

## How to get it running

1. CD into the "root" project. Build it with `npm run build`. Then start the server with `npm run preview`. Leave this running.
2. CD into the "react-side" project. Build it with `npm run build`. Then start the server with `npm run preview`. Leave this running. Alternatively, if you are only running the "react-side" project during development, then you can run `npm run dev` and view this micro frontend in isolation. 
3. CD into the "hotwire-side" project. Build it with `npm run build`. Then start the server with `npm run preview`. Leave this running. Alternatively, if you are only running the "hotwire-side" project during development, then you can run `npm run dev` and view this micro frontend in isolation.
4. Access the "root" project. This should pull in files from the "react-side", "hotwire-side" and display the page. 

Notes: 
For integration testing where you load in the "react-side" and "hotwire-side" into the "root" project, you can only use production builds of the "react-side" and "hotwire-side".
In other words, the development server versions of "react-side" and "hotwire-side" cannot be used in integration.

## Setup notes

For convenience, we have included `.env` files into the repository. Override environment variables in deployment as necessary.

## Demo

1. ["root-react" container application](https://microfrontend-root-react.vercel.app)
2. Micro-frontends: ["react-site"](https://microfrontend-react-site.vercel.app), ["hotwire-side](https://microfrontend-hotwire-side.vercel.app)

## How it works

### React side

The React side builds a JavaScript file that contains the "react-side" application.
When this JavaScript is loaded in the "container" application, 
it is inserted into the `root#react-root` element in `index.html`. 
CSS is also loaded.

The build also generates a manifest file so that the "root" application can always pull the latest versions.

This is how the React side is displayed when working inside this micro frontend.

Convenience methods are available to simplify this.

### Hotwire side

Hotwire is a combination of HTML and JavaScript. We need to pull in both. 

The "root" container application will pull in HTML from the "hotwire-side" applications using `turbo-frames`. 
The container application will also pull in the JavaScript and CSS from the "hotwire-side" application. 

The build also generates a manifest file so that the "root" application can always pull the latest versions.

Convenience methods are available to simplify this.

### Root: Container app

To ensure that we always use the latest micro frontend versions, we use digests. 
The root application has convenience methods to read manifest files and request the latest files.

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

### CORS

* Cross-origin Turbo Frames requests require preflights.

## Thoughts

This approach follows the [Run-time integration via JavaScript](https://martinfowler.com/articles/micro-frontends.html#Run-timeIntegrationViaJavascript) approach, which is described to be the most practical.

Each part can be independently deployed and independently developed,
thus satisfying the technical requirement of a micro frontend.

Micro-frontends with multiple pages can be integrated into the container application with minimal dependencies.
The container application should create container pages and summon each micro-frontend from each page.  

By enforcing conventions on paths
such that the path on the container page directly corresponds to a path on the micro-frontend,
you can minimize configuration and make it easy to manage.

This approach displays content as it becomes available and will cause layout shifts.
To hide this, we have added page transitions that hide the page until content has loaded.
