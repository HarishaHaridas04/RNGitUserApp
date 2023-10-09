import axios from 'axios';

const apiUrl = 'https://api.github.com/graphql';
const token = process.env.API_TOKEN;

const fetchUserDetails = async (query, variables) => {
  console.log(variables, '<==========variables')
  try {
    const response = await axios.post(
      apiUrl,
      {
        query, 
        variables
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.errors) {
      console.error('GraphQL errors:', response.data.errors);
      throw new Error('GraphQL query failed');
    }

    return response.data.data.user;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

export default fetchUserDetails;
