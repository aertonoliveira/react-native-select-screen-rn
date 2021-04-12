import styled from "styled-components/native";
import Icon from 'react-native-vector-icons/FontAwesome';
import type { ListItemProps } from ".";
interface PropsStyle{
  style: string;
}

export const Container = styled.View`
  background-color: #fff;
  position: absolute;
  z-index: 100;
  width:100%;
  padding:10px;
  top:0px;
  flex:1;
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
export const SelectBox = styled.TouchableOpacity<PropsStyle>`
    border-radius: 10px;
    border-width: 1px;
    borderColor: ${props => props.style ?? '#ccc'};
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
