export interface Group {
  id: number;
  name: string;
  todos: Todo[];
}

export interface Todo {
  id: number;
  name: string;
  created_on: Date;
  completed: boolean;
  group?: Group;
}

export interface TodoInput {
  name: string;
  groupId?: number;
}
export interface GroupInput {
  name: string;
}
