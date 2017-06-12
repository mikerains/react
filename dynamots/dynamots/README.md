
npm run build
npm start

https://github.com/ui-router/react/blob/master/docs/API.md

There are two ways to handle Client Side Routing
1. using pushStateLocationPlugin: use npm run start, which uses node server.js (see: https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#serving-apps-with-client-side-routing), which configures the serve to route all requests to Index.html, so that bookmarked links like http://localhost:5000/config works, but notice "index.html" is not in the URL, it would not be possible to serve up 2 SPA's from one site this way.

2. using hashLocationPlugin: unconfigured express server, npm run start:dev, and open browser to http://localhost:5000/index.html#/config.  

NOTE: for Client-Side Routing, see also comments in ../README and ../reactrouter/react-router-tuorial/lessons/13-server-rendering/server.js

I haven't proved it, but I think to include "index.html" in the url for PushStateLocation client-side routing would require server.js to configure app.use('GET',"/index.html/*"), but something else is needed, because the UISref links omit index.html in the URL, so they wouldn't work as deep links.


# References
https://github.com/ui-router/sample-app-react

https://github.com/ui-router/sample-app-react/tree/master/src/mymessages



https://github.com/ui-router/react/tree/master/example

https://ui-router.github.io/react/tutorial/helloworld

https://ui-router.github.io/react/docs/latest/classes/core.uirouter.html#plugin

