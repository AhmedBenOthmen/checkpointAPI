import axios from "axios";

// Define an asynchronous function to fetch user data from an API
const userListAPI = async () => {
  try {
    // Make a GET request to the specified API endpoint
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");

    // Check if the response is successful and return the data
    if (response) return response.data;
  } catch (error) {
    // Log any errors that occur during the API request
    console.log(error);
  }
};


export default userListAPI;
