// src/modules/todos/domain/use-cases/GetAllTodosUseCase.ts

import TodoRepository from "../../data/repositories/todo-repository";
import TodoEntity from "../entities/todo-entity";


class GetAllTodosUseCase {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async execute(): Promise<TodoEntity[]> {
    const todosData = await this.todoRepository.getAllTodos();
    return todosData.map((todo) => this.mapToEntity(todo));
  }

  private mapToEntity(data: any): TodoEntity {
    return {
      id: data.id,
      title: data.title,
      completed: data.completed,
    };
  }
}

export default GetAllTodosUseCase;
