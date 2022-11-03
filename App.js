import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const App = () => (
  <ScrollView contentContainerStyle={styles.scrollContentContainer}>
    <View style={styles.box}>
      <Text style={styles.text}>Original Object</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{scale: 2}],
        },
      ]}>
      <Text style={styles.text}>Scale by 2</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{scaleX: 2}],
        },
      ]}>
      <Text style={styles.text}>ScaleX by 2</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{scaleY: 2}],
        },
      ]}>
      <Text style={styles.text}>ScaleY by 2</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{rotate: '45deg'}],
        },
      ]}>
      <Text style={styles.text}>Rotate by 45 deg</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{rotateX: '45deg'}, {rotateZ: '45deg'}],
        },,
      ]}>
      <Text style={styles.text}>Rotate X&Z by 45 deg</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{rotateY: '45deg'}, {rotateZ: '45deg'}],
        },,
      ]}>
      <Text style={styles.text}>Rotate Y&Z by 45 deg</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{skewX: '45deg'}],
        },
      ]}>
      <Text style={styles.text}>SkewX by 45 deg</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{skewY: '45deg'}],
        },
      ]}>
      <Text style={styles.text}>SkewY by 45 deg</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{skewX: '30deg'}, {skewY: '30deg'}],
        },
      ]}>
      <Text style={styles.text}>Skew X&Y by 30 deg</Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{translateX: 50}],
        },
      ]}>
      <Text style={styles.text}>TranslateX by 50 </Text>
    </View>

    <View
      style={[
        styles.box,
        {
          transform: [{translateY: -140}],
        },
      ]}>
      <Text style={styles.text}>TranslateY by -140 </Text>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  scrollContentContainer: {
    alignItems: 'center',
    paddingBottom: 60,
  },
  box: {
    height: 120,
    width: 120,
    borderRadius: 100,
    marginVertical: 50,
    backgroundColor: 'pink',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    margin: 8,
    color: '#fff',
    textAlign: 'center',
  },
});

export default App;
