import * as React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import Select from 'react-native-select-screen-rn';

export default function App() {
  const ITEMS = [
    { id: 1, label: 'Element 1' },
    { id: 2, label: 'Element 2' },
    { id: 3, label: 'Element 3' },
    { id: 4, label: 'Element 4' },
    { id: 5, label: 'Element 5' },
  ];
  const [state, setState] = React.useState({
    id: 1,
    label: '',
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>Select a option above</Text>
      <Select
        options={{
          searchStyle: {
            iconSearch: '#f00',
            border: {
              color: '#f00',
              width: '5px',
              positionBorder: 'bottom',
              borderRadius: '0px',
            },

            colorText: '#fff',
          },
          selectBoxStyle: {
            angleDown: '#ccc',
            border: {
              color: '#f00',
              width: '5px',
              positionBorder: 'bottom',
              borderRadius: '0px',
            },
          },
          buttonItem: {
            colorText: '#000',
            itemLabelColor: '#fff',
            border: {
              color: '#f00',
              width: '5px',
              positionBorder: 'bottom',
              borderRadius: '0px',
            },
          },
          selectBoxTextColor: '#f00',
          backgroundContainer: '#000',
          selectBoxText: 'Select Value',
          searchTextPlaceholder: 'Search Here',
          selectBoxDisabled: false
        }}
        items={ITEMS}
        onChange={setState}
        selected={state.id}
      />
    </View>
  );
}
