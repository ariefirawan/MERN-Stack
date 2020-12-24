import React from 'react';

import './NewPlaces.css';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_REQUIRE } from '../../shared/util/validatiors';

const NewPlaces = () => {
  const titleInputChange = (id, value, isValid) => {};
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={titleInputChange}
      />
    </form>
  );
};

export default NewPlaces;
