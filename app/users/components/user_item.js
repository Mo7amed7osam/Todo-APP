import React from 'react';
import { View, Text, StyleSheet,Dimensions } from 'react-native';

export default function UserItem({ title }) {
    return (
        <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'pink',
      padding: 16,
      justifyContent: 'space-between',
      width: screenWidth * 0.878,
      margin: 8,
    },
    text: {
      flex: 1,
      flexWrap: 'wrap',
      fontSize: 18,
      fontWeight: '800',
      marginLeft: 8,
    },
  });
