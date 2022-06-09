import { $axios } from "@/plugins/axios";
import type { Todo, TodoInput } from "@/types";
import type { AxiosResponse } from "axios";

class TodoService {
  private readonly path = "todos";

  public async getAllTodos(): Promise<AxiosResponse<Todo[]>> {
    return await $axios.get(this.path);
  }

  public async getTodo(id: number): Promise<AxiosResponse<Todo>> {
    return await $axios.get(this.path + `/${id}`);
  }

  public async getTodosByGroup(
    groupId: number
  ): Promise<AxiosResponse<Todo[]>> {
    return await $axios.get(this.path + `/group/${groupId}`);
  }

  public async createTodo(todo: TodoInput): Promise<AxiosResponse<Todo>> {
    return await $axios.post(this.path, todo);
  }
  public async deleteTodo(id: number): Promise<AxiosResponse<Todo>> {
    return await $axios.delete(this.path + `/${id}`);
  }
  public async toggleTodo(id: number): Promise<AxiosResponse<Todo>> {
    return await $axios.put(this.path + `/${id}`);
  }
}

export const todoService = new TodoService();
