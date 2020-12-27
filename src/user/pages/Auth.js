import React from 'react';

import './Auth.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
} from '../../shared/util/validatiors';
import { useHook } from '../../shared/hook/form-hook';

const Auth = () => {
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const [formState, inputHandler] = useHook(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={onSubmitHandler}>
        <Input
          type="email"
          element="input"
          id="email"
          label="E-Mail"
          onInput={inputHandler}
          errorText="Please enter a valid email address"
          validators={[VALIDATOR_EMAIL()]}
        />
        <Input
          type="password"
          element="input"
          id="password"
          label="Password"
          onInput={inputHandler}
          errorText="Please enter a valid password (at least 5 characters)"
          validators={[VALIDATOR_MINLENGTH(5)]}
        />
        <Button type="submit" disabled={!formState.isValid}>
          LOGIN
        </Button>
      </form>
    </Card>
  );
};

export default Auth;
