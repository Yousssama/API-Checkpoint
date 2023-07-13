
import React, { useState, useEffect } from "react";
import axios from "axios";

function UserList() {

    const [listOfUser, setListOfUser] = useState([]);


    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {

                setListOfUser(response.data);
            })
            .catch((error) => {

                console.error(error);
            });
    }, []);


    return (
        <div className="user-list">
            {listOfUser.map((user) => (
                <div className="user-card" key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.website}</p>
                </div>
            ))}
        </div>
    );
}

export default UserList;
