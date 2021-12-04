export interface TodoItemType {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TableItemType {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type TableItemField = "userId" | "id" | "title" | "body"