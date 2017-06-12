# react
react sample projects

# Mike Next Steps
0. Understand Ui-Router's ViewConfigFactory.  See the sample app https://github.com/ui-router/react/blob/master/src/core.ts
1. UI-Router in Dynamots on 2 pages: Reddit and Appconfig
2. Offline State (create-react-app)
3. Preserve state between sessions (using redux - see Should I Use Redux link below)
4. Lazyloading - from ui-router https://ui-router.github.io/react/docs/latest/interfaces/react.reactstatedeclaration.html#lazyload
5. Doing it all with Create-React_app, see https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app


# Currently I am implementing
./dynamots

## This Sample App which uses ViewFactory: 

https://github.com/ui-router/react/blob/master/src/core.ts

That got me into this documentation: https://ui-router.github.io/react/docs/latest/modules/react.html#viewconfigfactory

and this: https://ui-router.github.io/react/docs/latest/classes/react.uirouterreact.html


Incidentally refering to FB React Documentation at: https://facebook.github.io/react/docs/conditional-rendering.html

### Some reference sample apps
Messages - Sample App:  https://github.com/ui-router/sample-app-react

https://github.com/ui-router/react/tree/master/example

## Offline Apps
[ ] Learn Offline Web Apps for Mobile Devices in the The Facebook Incubator project ./createapp
See https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#making-a-progressive-web-app


## Client side Routing
To get Client-Side Routing to work, I needed to configure express server.  See reduxjsAsync and https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#serving-apps-with-client-side-routing

See ./reduxjsAsync/server.js, which I gleaned from ./reactrouter/react-router-tutorial/lessons/13-server-rendering/server.js, and which came from https://github.com/reactjs/react-router-tutorial





## UI_Router
https://github.com/ui-router/react/blob/master/docs/API.md

https://github.com/ui-router/react/blob/master/docs/API.md#uirouterreact


# React Hot Module Reloading and Typescript

## typescript typings
npm install --save @types/webpack

npm install --save @types/webpack-env

npm install --save @types/react-hot-loader

Note: npm install --save @types/node export modeule: NodeModule whichi does not include 'hot' function that is included in @types/webpack-dev.
* See https://stackoverflow.com/questions/40568176/webpack-typescript-module-hot-does-not-exist
* See https://github.com/vitaliy-bobrov/angular-hot-loader/issues/5
* See https://github.com/glenjamin/webpack-hot-middleware/issues/89

## Getting Started
http://gaearon.github.io/react-hot-loader/getstarted/

https://webpack.js.org/guides/hot-module-replacement/

https://webpack.js.org/concepts/hot-module-replacement/



# Redux
* Shuld I use Redux?   https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367

# NPM

Versioning: https://docs.npmjs.com/misc/semver










