import React, { useState, useRef, useEffect } from "react";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

import NumberCointainer from "../components/NumberContainer";
import Card from "../components/Card";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Game Over</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default GameOverScreen;