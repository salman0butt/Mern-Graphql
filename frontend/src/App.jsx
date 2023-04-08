// Import everything needed to use the `useQuery` hook
import { useQuery, gql } from '@apollo/client';
import UserList from './components/UserList'
import AddUser from './components/AddUser'

export default function App() {
  return (
    <>
      <AddUser/>
      <UserList/>
    </>
  );
}