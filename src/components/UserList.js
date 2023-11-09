import React from "react";
import useUserList from "./logic/useUserList.js";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const UserList = () => {

  // Destructure data, error, and loading state from the useUserList hook
  const { listOfUsers, error, isLoading } = useUserList();

  // Render loading state if there's no data and still loading
  if (isLoading && listOfUsers && listOfUsers.length === 0)
  return <h1> L o a d i n g ...</h1>;

  // Render error message if there's an error and not in a loading state
  if (error && !isLoading) return <h1> {error}</h1>;
  
  if (!error && !isLoading && listOfUsers && listOfUsers.length === 0)
    return <h1>No Data Found </h1>;
  return (
    <div className="userList">
      <h2>List of Users</h2>
      <Card style={{ width: "18rem" }} bg="dark">
        <ListGroup variant="flush" as="ol" numbered>
          {/* Mapping through the list of users to create ListGroup.Items */}
          {listOfUsers.map((user) => (
            <ListGroup.Item key={user.id} as="li" variant="dark">
              {user.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card>
    </div>
  );
};

export default UserList;
