export type Product = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  price: number | null;
  name: string | null;
  description: string | null;
  stock: number | null;
};
