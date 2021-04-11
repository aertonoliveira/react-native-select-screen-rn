import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';

export const Container = styled.View`
  background-color: #fff;
  
`;

export const SearchBox = styled.View`
  border-radius: 10px;
  margin-bottom: 20px;
  border-width: 1px;
  borderColor: #CCCCCC;
  borderStyle: solid;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const SearchInput = styled.TextInput`
  padding: 15px 20px;
`;

export const ListElements = styled.ScrollView`

`;

export const ItemLabel = styled.Text`
  color: #000;
`;

export const ButtonItem = styled.TouchableOpacity`
  border-radius: 10px;
  margin-bottom: 5px;
  border-width: 1px;
  borderColor: #CCCCCC;
  borderStyle: solid;
  padding: 20px;
`;
export const SelectBox = styled.TouchableOpacity`
    border-radius: 10px;
    border-width: 1px;
    borderColor: #cccccc;
    borderStyle: solid;
    padding: 20px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const IconAngleDown = styled(Icon)`

`;
export const IconSearch = styled(Icon)`
  margin-right: 20px;
`;
