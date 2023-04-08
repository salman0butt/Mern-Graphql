import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../GraphQL/Mutations';
import { GET_USER_LIST } from '../GraphQL/Queries';

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const [createUser, { error }] = useMutation(CREATE_USER)

    const handleSubmit = async e => {
        e.preventDefault();
        const newUser = {
            name,
            email,
            gender,
        };

        createUser({
            variables: newUser,
            refetchQueries: [{ query: GET_USER_LIST }] // refetch the user list after deleting a user
        })

    };

    return (
        <div>
            <h2>Add User</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div>
                    <label>Gender:</label>
                    <select value={gender} onChange={e => setGender(e.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <button type="submit">Add User</button>
            </form>
        </div>
    );
};

export default AddUser;