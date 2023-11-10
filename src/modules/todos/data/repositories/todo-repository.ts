// src/modules/todos/infrastructure/repositories/TodoRepository.ts

import TodoModel from '../models/todo-model';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com/todos';

class TodoRepository {
  async getAllTodos(): Promise<TodoModel[]> {
    const response = await fetch(API_BASE_URL);
    const todos = await response.json();
    return todos;
  }

  async getTodoById(id: number): Promise<TodoModel | undefined> {
    const response = await fetch(`${API_BASE_URL}/${id}`);
    const todo = await response.json();
    return todo;
  }

  async addTodo(newTodo: TodoModel): Promise<TodoModel> {
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });
    const addedTodo = await response.json();
    return addedTodo;
  }

  async updateTodo(updatedTodo: TodoModel): Promise<TodoModel | null> {
    const response = await fetch(`${API_BASE_URL}/${updatedTodo.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });
    const updatedTodoResponse = await response.json();
    return updatedTodoResponse;
  }

  async deleteTodoById(id: number): Promise<TodoModel | null> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: 'DELETE',
    });
    if (response.ok) {
      const deletedTodo = await response.json();
      return deletedTodo;
    } else {
      return null;
    }
  }
}

export default TodoRepository;
