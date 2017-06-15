import React from 'react';
import { render } from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './style.css';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider>
    <div>Recipe book</div>
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));