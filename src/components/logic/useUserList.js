import { useEffect, useState } from "react";
import userListAPI from "./userListAPI.js";

// Custom hook to manage user list state and fetch data
const useUserList = () => {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState();

  // Asynchronous function to fetch user data
  const fetchData = async () => {
    try {
      setIsLoading(true);
      // Call the userListAPI function to get user data
      const response = await userListAPI();

      setListOfUsers(response);

      setIsLoading(false);
    } catch (error) {
      // If an error occurs during data fetching, set the error state
      setError(error);
    } finally {
      // Ensure loading state is set to false regardless of success or failure
      setIsLoading(false);
    }
  };

  // Use the useEffect hook to initiate data fetching when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  return { listOfUsers, error, isLoading };
};

export default useUserList;
