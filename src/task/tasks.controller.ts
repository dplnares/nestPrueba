import { Controller, Delete, Get, Patch, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TaskController {
  taskService: TasksService;
  constructor(taskService: TasksService) {
    this.taskService = taskService;
  }
  @Get()
  getAllTasks() {
    return this.taskService.getTasks();
  }
  @Post()
  createTask():string {
    return this.taskService.createTask();
  }
  @Put()
  updateTask() {
    return this.taskService.updateTask();
  }
  @Patch()
  patchTask() {
    return this.taskService.patchTask();
  }
  @Delete()
  deleteTask() {
    return this.taskService.deleteTask();
  }
}
