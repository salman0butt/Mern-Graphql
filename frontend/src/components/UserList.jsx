import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { GET_USER_LIST } from '../GraphQL/Queries';
import { DELETE_USER } from '../GraphQL/Mutations';

const UserList = () => {
    const { data } = useQuery(GET_USER_LIST);
    const [deleteUser, {error}] = useMutation(DELETE_USER);

    if(!data) return <h1>Loading..</h1>;

    const handleDeleteUser = (id) => {
        deleteUser({
            variables: {
                id: id
            },
            refetchQueries: [{ query: GET_USER_LIST }] // refetch the user list after deleting a user
        });
    }

    return (
        <div>
            <h2>User List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                
                    {data.userList?.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.gender}</td>
                            <td><button onClick={() => handleDeleteUser(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
