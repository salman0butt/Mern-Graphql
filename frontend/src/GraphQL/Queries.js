import { gql } from '@apollo/client';

export const GET_USER_LIST = gql`
query GetUserList{
  userList {
    id,
    name,
    email,
    gender
  }
}
`;