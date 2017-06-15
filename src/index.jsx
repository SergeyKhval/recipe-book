import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Sidebar from './components/Sidebar';
import Recipe from './components/Recipe';
import 'normalize.css';
import store from './store';
import './style.css';

injectTapEventPlugin();

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider>
      <div className="root">
        <Sidebar />
        <Recipe />
      </div>
    </MuiThemeProvider>
  </Provider>
);

render(<App />, document.getElementById('root'));