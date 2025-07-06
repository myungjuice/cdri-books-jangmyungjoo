type Meta = {
  total_count: number;
  pageable_count: number;
  is_end: boolean;
};

export type Target = "title" | "publisher" | "person";

export type Document = {
  title: string;
  contents: string;
  url: string;
  isbn: string;
  datetime: string;
  authors: string[];
  publisher: string;
  translators: string[];
  price: number;
  sale_price: number;
  thumbnail: string;
  status: string;
};

export type GetBooksRequest = {
  query?: string;
  sort?: "accuracy" | "latest";
  page?: number;
  size?: number;
  target: Target;
};

export type GetBooksResponse = {
  meta: Meta;
  documents: Array<Document>;
};
