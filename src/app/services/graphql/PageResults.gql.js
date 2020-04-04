import gql from "graphql-tag";

export default gql `
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
        description
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

// tslint:disable-next-line: max-line-length
// https://anilist.co/graphiql?query=query(%24page%3A%20Int!)%0A%7B%0A%20%20Page(page%3A%20%24page)%20%7B%0A%20%20%20%20pageInfo%20%7B%0A%20%20%20%20%20%20total%0A%20%20%20%20%20%20perPage%0A%20%20%20%20%20%20currentPage%0A%20%20%20%20%20%20lastPage%0A%20%20%20%20%20%20hasNextPage%0A%20%20%20%20%7D%0A%20%20%20%20media(sort%3A%20ID)%20%7B%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20title%20%7B%0A%20%20%20%20%20%20%20%20romaji%0A%20%20%20%20%20%20%20%20english%0A%20%20%20%20%20%20%20%20native%0A%20%20%20%20%20%20%20%20userPreferred%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20coverImage%20%7B%0A%20%20%20%20%20%20%20%20extraLarge%0A%20%20%20%20%20%20%20%20large%0A%20%20%20%20%20%20%20%20medium%0A%20%20%20%20%20%20%20%20color%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D
