
export interface ItemProps{
  id: number;
  label: string;
};
export interface Border{
  positionBorder?: string;
  color?: string;
  borderRadius?: string;
  width?: string;

};
export interface ButtonItem{
  border?: Border;
  colorText?:string;
  itemLabelColor?: string
};
export interface searchStyle{
  border?: Border;
  iconSearch?: string;
  colorText?: string;
};
export interface SelectBoxStyle{
  border?: Border;
  angleDown?: string;

};

export interface OptionsProps{
  searchStyle?: searchStyle;
  selectBoxStyle?: SelectBoxStyle;
  buttonItem?: ButtonItem;
  backgroundContainer?:string;
  searchTextPlaceholder?: string;
  selectBoxText?: string;
}

export interface ListItemProps {
  items: ItemProps[];
  onChange: (item: ItemProps) => void;
  selected?: number;
  options: OptionsProps;

}
