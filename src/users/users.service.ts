import { Injectable } from '@nestjs/common';
export interface User {
  name: string;
  lastname: string;
  email: string;
  age: number;
}
@Injectable()
export class UsersService {
  getUser() {
    return "All users";
  }
  createUser():User {
    return {
      name: "David",
      lastname: "Poblette",
      email: "dpoblette@gmail.com",
      age: 29
    };
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
