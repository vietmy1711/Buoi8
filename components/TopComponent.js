import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const TopComponent = (props) => {
  let data = props.data;
  return (
    <View style={styles.container}>
      <View style={styles.stockName}>
        <Text style={styles.stockName}>{data.Symbol}</Text>
        <Text style={styles.stockIndex}>{data['52WeekHigh']}</Text>
        <Text style={styles.stockChange}>{data.ShortRatio}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stockName: {
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  stockIndex: {
    fontSize: 80,
    textAlign: 'center',
  },
  stockChange: {
    fontSize: 40,
    textAlign: 'center',
  },
});

export default TopComponent;
