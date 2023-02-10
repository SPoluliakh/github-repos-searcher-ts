import { useDispatch } from 'react-redux';
import { signIn } from '../../../Redux/auth/authOperations';
import * as SC from './LoginForm.styled';
import { useState, ChangeEvent, FormEvent } from 'react';
import { AppDispatch } from '../../../Redux/store';

export const LoginForm = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();

  const handlInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const field = evt.target;
    switch (field.name) {
      case 'email':
        return setEmail(field.value);
      case 'password':
        return setPassword(field.value);
      default:
        return;
    }
  };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    // const form = evt.currentTarget;
    dispatch(
      signIn({
        email,
        password,
      })
    );
    resetForm();
  };
  return (
    <SC.LoginForm
      onSubmit={handleSubmit}
      autoComplete="off"
      aria-label="sign in form"
    >
      <SC.Wrapper>
        <SC.InnerWrapper>
          <SC.LabelArea htmlFor="email">Email </SC.LabelArea>
          <SC.LabelArea htmlFor="password">Password </SC.LabelArea>
        </SC.InnerWrapper>
        <SC.InnerWrapper>
          <SC.InputArea
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={handlInputChange}
            placeholder="LucasMoura@mail.com"
            required
          />
          <SC.InputArea
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={handlInputChange}
            placeholder="**********"
            required
          />
        </SC.InnerWrapper>
      </SC.Wrapper>

      <SC.LoginButton type="submit">Log In</SC.LoginButton>
    </SC.LoginForm>
  );
};
