import 'babel-polyfill'
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { AppContainer } from 'react-hot-loader';

import { Main } from './main/main'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Main);
//see https://webpack.js.org/guides/hmr-react/
if (module.hot) {
  module.hot.accept('./main/main', () => {
    render(Main)
  });
}