import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
  getProjects() {
    return 'Get all projects';
  }
  createProject() {
    return 'Create a project';
  }
  updateProject() {
    return 'Update a project';
  }
  patchProject() {
    return 'Patch a project';
  }
  deleteProject() {
    return 'Delete a project';
  }
}
