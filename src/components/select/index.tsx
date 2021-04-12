import React, { useState } from 'react';
import { Text } from 'react-native';

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

type ItemProps = {
  id: number;
  label: string;
};
type Border = {
  positionBorder?: string;
  border?: string;
  borderColor?: string;
};
type SelectStyle = {
  backgroundColor: string;
  border: Border;
};
type SelectBoxStyle = {
  backgroundColor: string;
  border: Border;
};

export interface ListItemProps {
  items: ItemProps[];
  onChange: (item: ItemProps) => void;
  selectStyle?: SelectStyle;
  selectBoxStyle?: SelectBoxStyle;
  color: string;
}

const Select: React.FC<ListItemProps> = ({
  items,
  onChange,
  selectStyle,
  color,
}: ListItemProps) => {
  const [getSelectItem, setSelectItem] = useState({} as ItemProps);
  const [showList, setShowList] = useState(false);

  const [searchItem, setSearchItem] = useState('');

  const renderListItems = (items: ItemProps[]) => {
    return (
      <Container>
        <SearchBox>
          <SearchInput
            value={searchItem}
            placeholder="Informe o que deseja buscar"
            onChangeText={(text: string) => setSearchItem(text)}
          />

          <IconSearch name="search" size={18} color="#999" />
        </SearchBox>
        <ListElements>
          {items
            .filter((item) =>
              item.label.toLowerCase().includes(searchItem.toLowerCase())
            )
            .map((item) => (
              <ButtonItem
                key={item.id}
                onPress={() => {
                  onChange(item);
                  setSelectItem(item);
                  setShowList(false);
                }}
              >
                <ItemLabel>{item.label}</ItemLabel>
              </ButtonItem>
            ))}
        </ListElements>
      </Container>
    );
  };

  return (
    <>
      {!showList ? (
        <SelectBox style={'#000'} onPress={() => setShowList(true)}>
          <Text>{getSelectItem.label ?? 'select item'}</Text>
          <IconAngleDown name="angle-down" size={18} color="#999" />
        </SelectBox>
      ) : (
        renderListItems(items)
      )}
    </>
  );
};

export default Select;
