import { ChangeEvent, MutableRefObject } from 'react';
import { BsXLg } from 'react-icons/bs';
import * as SC from './SearchBar.styled';

interface IProps<T> {
  onInputChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  element: MutableRefObject<T>;
  onClearBtn: () => void;
}

export const SearchBar = ({
  onInputChange,
  value,
  element,
  onClearBtn,
}: IProps<HTMLInputElement | null>) => {
  return (
    <SC.Wrap>
      <SC.SearchInput
        placeholder="Type to search... 🔎  "
        type="text"
        value={value}
        onChange={onInputChange}
        ref={element}
      />
      <SC.ClearButton type="button" onClick={onClearBtn}>
        <BsXLg size="24" />
      </SC.ClearButton>
    </SC.Wrap>
  );
};
