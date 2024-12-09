import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  user = {
    name: 'David Poblette',
    age: 29,
  };

  getUser() {
    return this.user;
  }
}
