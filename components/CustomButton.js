import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const CustomButton = (props) => {
  let data = props.data;
  let symbol = data.symbol;
  const _onPress = async () => {
    try {
      let response = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=UYVJCYL137S8GN6O`,
      );
      let json = await response.json();
      props.onPress(json);
    } catch (error) {
      console.error(error);
    }
    // fetch(
    //   `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=UYVJCYL137S8GN6O`,
    // )
    //   .then((response) => {
    //     console.log(response.json);
    //     return response.json;
    //   })
    //   .then((json) => {
    //     console.log(json);
    //     props.onPress(json);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };
  return (
    <TouchableOpacity style={styles.container} onPress={_onPress}>
      <View style={styles.wrap}>
        <Text style={styles.text}>{symbol}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrap: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: 'teal',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default CustomButton;
