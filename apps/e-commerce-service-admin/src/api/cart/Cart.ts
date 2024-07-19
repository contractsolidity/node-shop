import { User } from "../user/User";

export type Cart = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
};
