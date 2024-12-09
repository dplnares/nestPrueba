import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller({})
export class TaskController {
  taskService:TasksService;
  constructor(taskService:TasksService) {
    this.taskService = taskService;
  }

  @Get('/tasks')
  getAllTasks() {
    return this.taskService.testing();
  }
}
