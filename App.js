import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import TopComponent from './components/TopComponent';
import BottomComponent from './components/BottomComponent';

const App = () => {
  const initialState = {
    Symbol: 'No',
    '52WeekHigh': 0,
    ShortRatio: 0,
  };
  const [data, setData] = useState(initialState);
  const didPressButton = (item) => {
    console.log('didPressButton');
    console.log(item.length);
    setData(item);
  };
  return (
    <SafeAreaView style={styles.container}>
      <TopComponent data={data} />
      <BottomComponent onPress={didPressButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
