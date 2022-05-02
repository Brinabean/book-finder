import { gql } from "@apollo/client";

export const QUERY_SAVEDBOOKS = gql`
  query books($username: String) {
    books(username: $username) {
      authors
      description
      bookId
      image
      link
      title
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      books {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      books {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
