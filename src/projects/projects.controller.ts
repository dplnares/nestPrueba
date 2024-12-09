import { Controller, Delete, Get, Post, Put, Patch } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor (private projectService: ProjectsService) {}
  @Get()
  getAllProjects() {
    return this.projectService.getProjects();
  }
  @Post()
  createProject() {
    return this.projectService.createProject();
  }
  @Put()
  updateProject() {
    return this.projectService.updateProject();
  }
  @Patch()
  patchProject() {
    return this.projectService.patchProject();
  }
  @Delete()
  deleteProject() {
    return this.projectService.deleteProject();
  }
}
