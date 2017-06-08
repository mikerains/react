# From https://redux.js.org

## http://redux.js.org/docs/advanced/AsyncActions.html


http://redux.js.org/docs/advanced/

### See also
[naive reduxjs](../../../reduxjs)

[ToDo List ReduxJs2](../../../reduxjs2)

[React TS](../../../reactts)

http://redux.js.org/docs/advanced/

# Build and Run
## npm task "build" build the Reddit Async application
npm build - builds agains webpack.config.nonhmr.js

npm start - uses serve to host the built

## npm task "starthmr" runs dev server on localhost:8080 which uses Hot Module Replacement
npm run starthmr - executes the npm plugin "webpack-dev-server" which executes webpack.config.js

-- see node_modules\.bin\webpack-dev-server -?

-- see https://webpack.js.org/guides/development/ which explains "How To Develop" along with dev-server.

webpack.config.js has configuration to run the dev-server:
````js
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'dist'),
        // match the output path

        publicPath: '/',
        // match the output `publicPath`
        
        historyApiFallback: true
    },
````

# Hot Module Reloading
## HMR based on:

https://webpack.js.org/concepts/hot-module-replacement/

https://webpack.js.org/guides/hmr-react/

### for HMR's webpack.config.js, 
### the postcss-loader didn't work out of the box form the Webpack Concepts HMR example
### the fix was found at https://github.com/postcss/postcss-loader/issues/92#issuecomment-280878821

in containers/Root.js, JSX is used to wrap a DOM Expression in parenthesis:
    return (
      <Provider store={store}>
        <AsyncApp />
      </Provider>
    )

in containers/AsyncApp.js, using ES7 to initialize isFetching
The const 'posts' is established as the value of postsBySubreddit().items,
See "Assigning to new variables" in https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  in index.js, the Hot Module Replcement is configured by first creating an AppContainer from react-hot-loader,
  and then rendering into it the ourput of containers/Root.js' <provider> whose
  "store" property is set to the connect(mapStateToProps) result from containers/AsyncApp.js:
    export default connect(mapStateToProps)(AsyncApp)






