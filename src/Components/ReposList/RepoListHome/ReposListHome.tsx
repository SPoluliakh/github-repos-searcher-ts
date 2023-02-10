import { NoInfo } from '../../NoInfo/NoInfo';
import { RepoListItem } from '../RepoListItem/RepoListItem';
import * as SC from './ReposListHome.styled';
import { scrollbars } from '../../../Helpers/scrollbars';
import { IRepo } from '../../../Redux/gitApiOperations/git.interfaces';

interface IProps {
  userRepos: IRepo[];
  isLoading: boolean;
  reposDropdown: boolean;
}

export const ReposListHome = ({
  userRepos,
  isLoading,
  reposDropdown,
}: IProps) => {
  if (!userRepos?.length) return null;
  return (
    <>
      <SC.List element="ul" options={{ scrollbars }}>
        {isLoading && <li>Loading...</li>}
        {!userRepos.length && <li>{<NoInfo />}</li>}
        {userRepos.map(
          ({
            id,
            html_url,
            full_name,
            forks,
            watchers,
            description,
            updated_at,
          }) => (
            <RepoListItem
              key={id}
              html_url={html_url}
              full_name={full_name}
              forks={forks}
              watchers={watchers}
              description={description ?? 'No info'}
              updated_at={updated_at ?? Date.now()}
              reposDropdown={reposDropdown}
            />
          )
        )}
      </SC.List>
    </>
  );
};
