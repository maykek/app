import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function ViewStyleProps () {
    return (
      <View style={styles.container}>
        <Text style={styles.top}>1Help</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100, 
    justifyContent: "center",

  },
  top: {
  	textAlign: "center",
    justifyContent: "center",
    fontSize: 36,
  	fontWeight: "bold",
    color: '#f9990A',
  },
 
});

