import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($name: String!, $email: String!, $gender: String!){
    createUser(name: $name, email: $email, gender: $gender) {
        success,
        message,
        error
    }
}
`;
export const DELETE_USER = gql`
mutation deleteUser($id: Int!){
    deleteUser(id: $id) {
        success,
        message,
        error
    }
}
`;