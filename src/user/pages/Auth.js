import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import './Auth.css';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Input from '../../shared/components/FormElements/Input';
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_EMAIL,
  VALIDATOR_REQUIRE,
} from '../../shared/util/validatiors';
import { useHook } from '../../shared/hook/form-hook';
import { AuthContext } from '../../shared/context/auth-context';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const auth = useContext(AuthContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await auth.login();
    return <Redirect to="/" />;
  };

  const [formState, inputHandler, setFormData] = useHook({}, false);

  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogin((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={onSubmitHandler}>
        {!isLogin && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="please enter a name"
            onInput={inputHandler}
          />
        )}
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
          {isLogin ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        {isLogin ? 'SWITCH TO SIGNUP' : 'SWITCH TO LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
