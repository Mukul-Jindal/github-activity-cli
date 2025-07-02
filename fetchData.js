// import fetch from 'node-fetch';

export async function fetchData(userName) {
  try {
    const response = await fetch(`https://api.github.com/users/${userName}/events`,
      {
          headers: {
          "User-Agent": "node.js",
        },
      }
    );
    switch (response.status) {
      case 401:
        throw new Error('Unauthorized: Invalid or missing credentials.');
      case 403:
        throw new Error('Forbidden: You have hit a rate limit or do not have access.');
      case 404:
        throw new Error('Please enter a valid username.');
      case 500:
        throw new Error('Internal Server Error at GitHub.');
    }

    if (response.status === 200) {
      const data = await response.json();
      return data;
    }
  }
  catch (error) {
    throw new Error(error);
  }
}