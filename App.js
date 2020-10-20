import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={styles.topBar}>
        </View>
        <View style={styles.category}>
          <Text style={styles.category}>
            Groceries
          </Text>
        </View>
        <View style={styles.listItem}>
          <Text style={styles.listItem}>
            A carrot
          </Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFDCCC',
  },
  topBar: {
    height: deviceHeight/10,
    width: deviceWidth,
    backgroundColor: '#FFF9EC',
    alignContent: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: deviceHeight/500,
  },
  newItem: {
    fontFamily: 'Roboto',
    marginTop: deviceHeight/40,
    marginLeft: deviceWidth/3*2,
    height: deviceHeight/20,
    width: deviceWidth/4,
    backgroundColor: '#FB6376',
    color: 'white',
    borderRadius: deviceWidth/50,
    borderColor: '#5D2A42',
    borderWidth: deviceHeight/500,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: deviceHeight/50,
  },
  listItem: {
    fontFamily: 'Roboto',
    height: deviceHeight/15,
    width: deviceWidth,
    borderBottomColor: 'black',
    borderTopColor: '#5D2A42',
    borderBottomWidth: deviceHeight/500,
    color: '#5D2A42',
    fontSize: deviceHeight/40,
    backgroundColor: '#FFF9EC',
    textAlignVertical: 'center',
    paddingLeft: deviceWidth/80,
  },
  category: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: deviceHeight/20,
    height: deviceHeight/10,
    width: deviceWidth,
    borderTopColor: '#5D2A42',
    borderBottomWidth: deviceHeight/500,
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#FCB1A6',
  },
});
