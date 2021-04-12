import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import Select from 'react-native-select-screen-rn';

export default function App() {
  const [result, setResult] = React.useState<number | undefined>();

  const ITEMS = [
    { id: 1, label: 'Element 1' },
    { id: 2, label: 'Element 2' },
    { id: 3, label: 'Element 3' },
    { id: 4, label: 'Element 4' },
    { id: 5, label: 'Element 5' },
  ];
  const [state, setState] = React.useState({});

  return (
    <View style={styles.container}>
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
            colorText: '#fff',
            itemLabelColor: '#fff',
            border: {
              color: '#f00',
              width: '5px',
              positionBorder: 'bottom',
              borderRadius: '0px',
            },
          },
          backgroundContainer: '#000',
        }}
        items={ITEMS}
        onChange={setState}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
