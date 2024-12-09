import { Module } from '@nestjs/common';
import { TasksModule } from './task/tasks.module';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
@Module({
  imports: [TasksModule, ProjectsModule, AuthModule, UsersModule],
})
export class AppModule {}
