import styled from "styled-components/native";

import Icon from 'react-native-vector-icons/FontAwesome';
import type { OptionsProps } from "src/interfaces/interfaces";
interface PropsStyle{
  style?: OptionsProps;
}

interface PropsColor{
  color?: string;
}

export const Container = styled.View<PropsStyle>`
  background-color: ${props => props.style?.backgroundContainer ?? '#fff'};
  width:100%;
  padding:10px;
`;

export const SearchBox = styled.View<PropsStyle>`
  margin-bottom: 20px;
  border-radius: ${props => props.style?.searchStyle?.border?.borderRadius ?? '10px'};
  border-${props => props.style?.searchStyle?.border?.positionBorder ? props.style?.searchStyle?.border?.positionBorder + '-' : ''}width:
  ${props => props.style?.searchStyle?.border?.width ?? '1px'};
  borderColor: ${props => props.style?.searchStyle?.border?.color ?? '#ccc'};
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

export const ItemLabel = styled.Text<PropsColor>`
  color: ${props => props.color};
`;

export const ButtonItem = styled.TouchableOpacity<PropsStyle>`
  margin-bottom: 5px;
  border-radius: ${props => props.style?.selectBoxStyle?.border?.borderRadius ?? '10px'};
  border-${props => props.style?.selectBoxStyle?.border?.positionBorder ? props.style?.selectBoxStyle?.border?.positionBorder + '-' : ''}width: 1px;
  borderColor: ${props => props.style?.selectBoxStyle?.border?.color ?? '#ccc'};
  borderStyle: solid;
  padding: 20px;

`;
export const SelectBox = styled.TouchableOpacity<PropsStyle>`
    border-radius: ${props => props.style?.selectBoxStyle?.border?.borderRadius ?? '10px'};
    border-${props => props.style?.selectBoxStyle?.border?.positionBorder ? props.style?.selectBoxStyle?.border?.positionBorder + '-' : ''}width: 1px;
    borderColor: ${props => props.style?.selectBoxStyle?.border?.color ?? '#ccc'};
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
