import React, { useState } from "react";

import "./App.css";
import UserForm from "./UI/UserForm";
import UserList from "./UI/UserList";

function App() {
  const [arrayOfUsers, addToArrayOfUsers] = useState([]);

  const addUser = (newUsername, newAge) => {
      addToArrayOfUsers( (prevArrayOfUsers) => {
          const arrayOfUsers = [...prevArrayOfUsers];
          const newUser = {
            'username': newUsername,
            'age': newAge,
        }
        arrayOfUsers.unshift(newUser);
        return arrayOfUsers;
      });
  };

  return (
    <div className="App">
      <UserForm addUserFunction={addUser} />
      <UserList userList={arrayOfUsers} id="user-list" />
    </div>
  );
}

export default App;
