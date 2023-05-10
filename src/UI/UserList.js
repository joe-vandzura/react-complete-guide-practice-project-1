import React from "react";


const UserList = (props) => {

    const listElementsOfUsers = props.userList.map( user => <li key={Math.random().toString()}>{user.username} ({user.age} years old)</li>);

    return <ul>
        {listElementsOfUsers}
    </ul>
};

export default UserList;