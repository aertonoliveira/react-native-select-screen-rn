import React, { useEffect, useState, useRef } from 'react';
import { Text } from 'react-native';
import type { ItemProps, ListItemProps } from 'src/interfaces/interfaces';
import { Modalize } from 'react-native-modalize';
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
  selected,
  options,
}: ListItemProps) => {
  const [getSelectItem, setSelectItem] = useState({} as ItemProps);
  const [showList, setShowList] = useState(false);
  const modalizeRef = useRef<Modalize>(null);

  const onOpen = () => {
    setShowList(true);
    modalizeRef.current?.open();
  };
  const onClose = () => {
    setShowList(false);
    modalizeRef.current?.close();
  };
  const onCloseDown = () => {
    setShowList(false);
  };

  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    if (selected) {
      items.filter((item) => (item.id === selected ? setSelectItem(item) : ''));
    }
  });
  const renderListItems = (items: ItemProps[]) => {
    return (
      <Container style={options}>
        <SearchBox style={options}>
          <SearchInput
            value={searchItem}
            placeholderTextColor={options.searchStyle?.colorText ?? '#ccc'}
            placeholder={options.searchTextPlaceholder}
            onChangeText={(text: string) => setSearchItem(text)}
          />

          <IconSearch
            color={options.searchStyle?.iconSearch ?? '#000000'}
            name="search"
            size={18}
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
                  onClose();
                  onChange(item);
                  setSelectItem(item);
                }}
              >
                <ItemLabel color={options.buttonItem?.itemLabelColor}>
                  {item.label}
                </ItemLabel>
              </ButtonItem>
            ))}
        </ListElements>
      </Container>
    );
  };

  return (
    <>
      {!showList && (
        <SelectBox style={options} onPress={() => onOpen()}>
          <Text>{getSelectItem.label ?? options.selectBoxText}</Text>
          <IconAngleDown
            name="angle-down"
            size={18}
            color={options.selectBoxStyle?.angleDown ?? '#000000'}
          />
        </SelectBox>
      )}
      <Modalize
        modalStyle={{ backgroundColor: options.backgroundContainer }}
        onClose={() => onCloseDown()}
        ref={modalizeRef}
      >
        {renderListItems(items)}
      </Modalize>
    </>
  );
};

export default Select;
