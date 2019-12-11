import gql from "graphql-tag";

export default gql`
  query($page: Int!) {
    Page(page: $page) {
      pageInfo {
        total
        perPage
        currentPage
        lastPage
        hasNextPage
      }
      media(sort: ID, isAdult: false) {
        id
        title {
          romaji
          english
          native
          userPreferred
        }
        coverImage {
          extraLarge
          large
          medium
          color
        }
      }
    }
  }
`;
