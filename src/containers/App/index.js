import React, { Component } from "react";

import style from "./style";
import { withStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import TaskBoard from "./../Taskboard/index";
import theme from "./../theme/index";

class App extends Component {
  render() {
    // console.log(this.props);
    // const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <TaskBoard />
      </ThemeProvider>
    );
  }
}

export default withStyles(style)(App);
