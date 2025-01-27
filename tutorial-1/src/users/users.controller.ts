import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {


  constructor(private readonly userService:UsersService){

  }

  // GET/users
  @Get()
  findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN') {
    return this.userService.findAll(role)
  }

  //GET /users/:id
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id)
  }

  //POST /users
  @Post()
  createUser(@Body() user: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    return this.userService.createUser(user)
  }

  //PATCH /users/:id
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() userUpdate: {
    name: string;
    email: string;
    role: 'INTERN' | 'ENGINEER' | 'ADMIN';
  }) {
    return this.userService.updateUser(+id,userUpdate)
  }

  //DELETE /users/:id
  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(+id)
  }
}
