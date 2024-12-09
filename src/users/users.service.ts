import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUser() {
    return "All users";
  }
  createUser() {
    return "Create user";
  }
  updateUser() {
    return "Update user";
  }
  patchUser() {
    return "Patch user";
  }
  deleteUser() {
    return "Delete user";
  }
}
