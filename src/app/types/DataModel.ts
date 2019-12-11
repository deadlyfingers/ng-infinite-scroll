export interface Result {
  data?: PageWrapper;
}

export interface PageWrapper {
  Page: Page;
}

export interface Page {
  pageInfo: PageInfo;
  media: Media[];
}

export interface PageInfo {
  total: number;
  perPage: number;
  currentPage: number;
  lastPage: number;
  hasNextPage: boolean;
}

export interface Media {
  id: number;
  title: Title;
  coverImage: CoverImage;
}

export interface Title {
  romaji?: string;
  english: string;
  native: string;
  userPreferred?: string;
}

export interface CoverImage {
  extraLarge?: string;
  large?: string;
  medium: string;
  color: string;
}
