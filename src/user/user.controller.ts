import { Body, Controller, Post } from '@nestjs/common';
import { IsPublic } from 'src/auth/decorators/is-public.decorator';

import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

//@IsPublic()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
