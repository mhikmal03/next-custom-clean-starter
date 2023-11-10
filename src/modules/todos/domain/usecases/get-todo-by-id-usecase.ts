// src/modules/todos/domain/use-cases/GetTodoByIdUseCase.ts

import TodoRepository from "../../data/repositories/todo-repository";
import TodoEntity from "../entities/todo-entity";


class GetTodoByIdUseCase {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async execute(id: number): Promise<TodoEntity | undefined> {
    const todoData = await this.todoRepository.getTodoById(id);
    return todoData ? this.mapToEntity(todoData) : undefined;
  }

  private mapToEntity(data: any): TodoEntity {
    return {
      id: data.id,
      title: data.title,
      completed: data.completed,
    };
  }
}

export default GetTodoByIdUseCase;
