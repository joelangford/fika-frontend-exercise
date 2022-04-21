import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    borderColor: '#9f9f9f',
    borderRadius: 20,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
  },
  field: {
    backgroundColor: '#000',
    color: '#fff',
    paddingHorizontal: 20,
  },
});

const SearchField = ({setQuery}) => {
  return (
    <View
        style={styles.container}
      >
      <TextInput
        placeholder="Search"
        placeholderTextColor="#9f9f9f"
        onChangeText={(queryText) => setQuery(queryText)}
        style={styles.field}
      />
    </View>
  )
}

export default SearchField;