import { StatusBar, View, StyleSheet } from "react-native";
import Signup from "./screens/Signup";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <ThemeProvider theme={theme}>
          <StatusBar barStyle="dark-content" />
          <Signup />
        </ThemeProvider>
      </View>
    );
  }
}
