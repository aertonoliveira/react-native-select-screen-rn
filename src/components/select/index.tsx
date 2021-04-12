import React, { useState } from 'react';
import { Text } from 'react-native';
import type { ItemProps, ListItemProps } from 'src/interfaces/interfaces';

import {
  Container,
  SearchBox,
  ListElements,
  ItemLabel,
  ButtonItem,
  SearchInput,
  SelectBox,
  IconAngleDown,
  IconSearch,
} from '../../components/select/styles';

const Select: React.FC<ListItemProps> = ({
  items,
  onChange,
  options,
}: ListItemProps) => {
  const [getSelectItem, setSelectItem] = useState({} as ItemProps);
  const [showList, setShowList] = useState(false);

  const [searchItem, setSearchItem] = useState('');

  const renderListItems = (items: ItemProps[]) => {
    return (
      <Container style={options}>
        <SearchBox style={options}>
          <SearchInput
            style={options}
            value={searchItem}
            placeholder="Informe o que deseja buscar"
            placeholderTextColor={options.searchStyle?.colorText ?? '#ccc'}
            onChangeText={(text: string) => setSearchItem(text)}
          />

          <IconSearch
            name="search"
            size={18}
            color={options.searchStyle?.iconSearch ?? '#ccc'}
          />
        </SearchBox>
        <ListElements>
          {items
            .filter((item) =>
              item.label.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((item) => (
              <ButtonItem
                style={options}
                key={item.id}
                onPress={() => {
                  onChange(item);
                  setSelectItem(item);
                  setShowList(false);
                }}
              >
                <ItemLabel style={options}>{item.label}</ItemLabel>
              </ButtonItem>
            ))}
        </ListElements>
      </Container>
    );
  };

  return (
    <>
      {!showList ? (
        <SelectBox style={options} onPress={() => setShowList(true)}>
          <Text>{getSelectItem.label ?? 'select item'}</Text>
          <IconAngleDown
            name="angle-down"
            size={18}
            color={options.selectBoxStyle?.angleDown ?? '#000000'}
          />
        </SelectBox>
      ) : (
        renderListItems(items)
      )}
    </>
  );
};

export default Select;
