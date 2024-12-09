import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  getUsers() {
    return this.userService.getUser();
  }
  @Post()
  createUser() {
    return this.userService.createUser();
  }
  @Put()
  updateUser() {
    return this.userService.updateUser();
  }
  @Patch()
  patchUser() {
    return this.userService.patchUser();
  }
  @Delete()
  deleteUser() {
    return this.userService.deleteUser();
  }
}
