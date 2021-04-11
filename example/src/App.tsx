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
      <Select items={ITEMS} onChange={setState} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
