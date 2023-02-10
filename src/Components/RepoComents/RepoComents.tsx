import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';
import { useUpdateRepoComentsMutation } from '../../Redux/reposOperations/reposOperations';
import * as SC from './RepoComents.styled';

interface IProps {
  coments: string;
  id: string;
}

export const RepoComents = ({ coments, id }: IProps) => {
  const [repoComents, setRepoComents] = useState<string>(coments);
  const [updateRepoComents] = useUpdateRepoComentsMutation();

  const handleComentsChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = evt.target as HTMLTextAreaElement;

    setRepoComents(value);
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (!repoComents) {
      setRepoComents('Your coments...');
      return;
    }
    const comentToUpdate = {
      id,
      data: repoComents,
    };
    updateRepoComents(comentToUpdate);
  };

  return (
    <SC.ReposComentsWrap>
      <SC.ComentsForm onSubmit={handleSubmit}>
        <SC.Text
          value={repoComents as string}
          onChange={handleComentsChange!}
          rows={7}
          placeholder="Your coments..."
        ></SC.Text>
        <SC.ChangeBtn type="submit">Save</SC.ChangeBtn>
      </SC.ComentsForm>
    </SC.ReposComentsWrap>
  );
};
