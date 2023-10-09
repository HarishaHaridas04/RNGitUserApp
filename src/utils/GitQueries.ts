export const GET_USER_DETAILS = `
    query GetUserDetails($username: String!) {
        user(login: $username) {
          login
          name
          location
          twitterUsername
          bio
          avatarUrl
          following (first: 100) { 
            totalCount
            edges {
                node {
                    name
                    login
                    avatarUrl
                    location
                }
            }
          }
          followers (first: 100) { 
            totalCount
            edges {
                node {
                    name
                    login
                    avatarUrl
                    location
                }
            }
          }
        }
      }
    `;
