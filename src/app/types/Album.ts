export interface Album {
  name: string;
  year: number;
  image: string;
  tracks:  {name: string, length: string} []
}
