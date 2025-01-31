import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      name: 'Alice Johnson',
      role: 'INTERN',
      id: 1,
      email: 'alice.johnson@example.com',
    },
    {
      name: 'Bob Smith',
      role: 'ENGINEER',
      id: 2,
      email: 'bob.smith@example.com',
    },
    {
      name: 'Charlie Davis',
      role: 'ADMIN',
      id: 3,
      email: 'charlie.davis@example.com',
    },
    {
      name: 'Diana Lee',
      role: 'ENGINEER',
      id: 4,
      email: 'diana.lee@example.com',
    },
    {
      name: 'Ethan Wright',
      role: 'INTERN',
      id: 5,
      email: 'ethan.wright@example.com',
    },
  ];

  findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }

  createUser(user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    const newUser = {
      id: Math.floor(Math.random() * 10000000),
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(
    id: number,
    updateUser: {
      name?: string;
      email?: string;
      role?: 'INTERN' | 'ENGINEER' | 'ADMIN';
    },
  ) {
    this.users.map((user) => {
      if (user.id === id){
        const updatedUser =  { ...user, ...updateUser };
        return updatedUser
    }
      return user;
    });
    return this.findOne(id);
  }
  

  deleteUser(id: number) {
    const removedUser = this.findOne(id);
    this.users = this.users.filter((user) => user.id !== id);
    return removedUser;
  }
}
