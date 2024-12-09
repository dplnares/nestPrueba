import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TaskController } from './task/tasks.controller';
import { ProjectsController } from './projects/projects.controller';
import { AuthController } from './auth/auth.controller';
import { UsersController } from './users/users.controller';
import { TasksService } from './task/tasks.service';
import { UsersService } from './users/users.service';
import { ProjectsService } from './projects/projects.service';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
  controllers: [TaskController, ProjectsController, AuthController, UsersController],
  providers: [TasksService, UsersService, ProjectsService, AuthService],
})
export class AppModule {}
