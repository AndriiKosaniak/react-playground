export interface User {
  name: {
    title: string;
    first: string;
    last: string;
  };
  cell: string;
  picture: {
    large: string;
  };
  id?: {
    name: string;
    value: string;
  };
}
