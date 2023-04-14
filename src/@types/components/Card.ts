export interface CardProps {
  layout?: "row" | "col";
  addAble?: true | false;
  title: string;
  desc?: string;
  rank?: number;
  image: string;
  price?: number;
  id: number;
  amount?: number;
}
