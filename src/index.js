import React from "react";
import ReactDOM from "react-dom";
import NAV from "./components/navbar/App.jsx";
import LOADER from "./components/Loading/loading.jsx";
import { ThemeProvider } from 'theme-ui'
import theme from '@hackclub/theme'
const rootElement = document.getElementById("body");
const footer = document.getElementById("footer");

ReactDOM.render(
  <div>
     <ThemeProvider theme={theme}>
    <NAV />
    </ThemeProvider>
  </div>,
  rootElement
);

ReactDOM.render(
  <div>
     <ThemeProvider theme={theme}>
    <LOADER />
    </ThemeProvider>
  </div>,
  footer
);

