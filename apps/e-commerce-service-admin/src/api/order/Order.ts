import { User } from "../user/User";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  totalAmount: number | null;
  user?: User | null;
};
