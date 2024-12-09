import { Injectable } from '@nestjs/common';
@Injectable()
export class TasksService {
  getTasks() {
    return {nombre: 'Hola mundo', descripcion: 'Esto es una tarea'};
  }
  testing() {
    return 'Testing';
  }
  createTask() {
    return 'create task';
  }
  updateTask() {
    return 'update task';
  }
  patchTask() {
    return 'patch task';
  }
  deleteTask() {
    return 'delete task';
  }
}