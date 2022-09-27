import { Category } from "./category.type";

export enum ActivityStatus {
  PENDING = "PENDING",
  PAID = "PAID",
  DUE = "DUE",
}

export interface Activity {
  title: string;
  description?: string;
  amount: number;
  date: Date;
  category: Category;
  status: ActivityStatus;
}

export interface ActivityResponse extends Activity {
  id: number;
}

export type ActivityBasicResponse = Omit<
  ActivityResponse,
  "date" | "description" | "category"
> & {
  id: number;
  date: string | Date;
};
