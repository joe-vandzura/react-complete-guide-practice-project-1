import React, { useState } from "react";


const UserForm = (props) => {
    const [usernameInputValue, setUsernameInputValue] = useState('');
    const [ageInputValue, setAgeInputValue] = useState('');

    const usernameInputHandler = (e) => {
        setUsernameInputValue(e.target.value);
    };

    const ageInputHandler = (e) => {
        setAgeInputValue(e.target.value);
    };

   const submitFormHandler = () => {
    if (usernameInputValue.trim() === '' || ageInputValue === '') {
        alert('You did not add an input to one of the fields.');
        return;
    }
    if (ageInputValue < 1) {
        alert("Please enter a valid number (>0).")
        return;
    }
    props.addUserFunction(usernameInputValue, ageInputValue);
    setUsernameInputValue('');
    setAgeInputValue('');
   }


  return <div>
    <form>
        <label>Username</label>
        <input onChange={usernameInputHandler} value={usernameInputValue} type="text" />
        <label>Age (Years)</label>
        <input onChange={ageInputHandler} value={ageInputValue} type="number" />
        <button type="button" onClick={submitFormHandler}>Add User</button>
    </form>
  </div>
};

export default UserForm;
