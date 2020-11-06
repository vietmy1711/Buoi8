import React from 'react';
import {View, StyleSheet} from 'react-native';

import CustomButton from './CustomButton';

const BottomComponent = (props) => {
  const onPress = (data) => {
    props.onPress(data);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CustomButton data={SYMBOLS[0]} onPress={onPress} />
        <CustomButton data={SYMBOLS[1]} onPress={onPress} />
        <CustomButton data={SYMBOLS[2]} onPress={onPress} />
      </View>
      <View style={styles.row}>
        <CustomButton data={SYMBOLS[3]} onPress={onPress} />
        <CustomButton data={SYMBOLS[4]} onPress={onPress} />
        <CustomButton data={SYMBOLS[5]} onPress={onPress} />
      </View>
      <View style={styles.row}>
        <CustomButton data={SYMBOLS[6]} onPress={onPress} />
        <CustomButton data={SYMBOLS[7]} onPress={onPress} />
        <CustomButton data={SYMBOLS[8]} onPress={onPress} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
});

const SYMBOLS = [
  {symbol: 'IBM'},
  {symbol: 'AMZN'},
  {symbol: 'APPL'},
  {symbol: 'GOOG'},
  {symbol: 'JNJ'},
  {symbol: 'NVS'},
  {symbol: 'CHL'},
  {symbol: 'ABT'},
  {symbol: 'AXP'},
];

export default BottomComponent;
