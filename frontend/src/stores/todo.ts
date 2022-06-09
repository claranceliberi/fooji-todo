import { todoService } from "./../services/todo.service";
import type { TodoInput, Todo } from "@/types/index";
import { defineStore } from "pinia";

interface TodoState {
  todos: Todo[];
}

export const useTodoStore = defineStore({
  id: "todo",
  state: (): TodoState => ({
    todos: [],
  }),

  actions: {
    async addTodo(payload: TodoInput) {
      return await todoService.createTodo(payload);
    },
    async getAllTodoItems() {
      const res = await todoService.getAllTodos();

      this.todos = res.data;
      return res.data;
    },
    async deleteTodo(id: number) {
      return await todoService.deleteTodo(id);
    },
  },
});
