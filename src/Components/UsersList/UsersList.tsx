import { MouseEvent } from 'react';
import { NoInfo } from '../NoInfo/NoInfo';
import * as SC from './UsersList.styled';
import { scrollbars } from '../../Helpers/scrollbars';
import { IGitAcounts } from '../../Redux/gitApiOperations/git.interfaces';

interface IProps {
  users: IGitAcounts[];
  onItemClick: (evt: MouseEvent<HTMLLIElement>) => void;
  reposDropdown: boolean;
  isLoading: boolean;
}

export const UsersList = ({
  users,
  onItemClick,
  reposDropdown,
  isLoading,
}: IProps) => {
  return (
    <SC.UserList
      data-check={reposDropdown}
      element="ul"
      options={{ scrollbars }}
    >
      {isLoading && <li>Loading...</li>}
      {!users?.length && <li>{<NoInfo />}</li>}
      {users?.map(user => (
        <SC.Item key={user.id} onClick={onItemClick}>
          {user.login}
        </SC.Item>
      ))}
    </SC.UserList>
  );
};
