import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { CreateUserDto, GetUserByIdDto } from './dto/User.dto';
import { UpdateUserDto } from './dto/User.dto';

@ApiTags('users')
@Controller('users')
export class UserController {
  @Post()
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'The user has been successfully created.', type: CreateUserDto })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiBody({
    schema:{
      
    }
  })
  createUser(@Body() createUserDto: CreateUserDto): CreateUserDto {
    return createUserDto;
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'The found record', type: CreateUserDto })
  @ApiResponse({ status: 404, description: 'Not Found' })
  getUserById(@Param('id') id: string): CreateUserDto {
    return { email: 'user@example.com', authenticationMethod: 'GOOGLE' };
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'The user has been successfully updated.', type: UpdateUserDto })
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): UpdateUserDto {
    return updateUserDto;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete user' })
  @ApiParam({ name: 'id', description: 'User ID' })
  @ApiResponse({ status: 200, description: 'The user has been successfully deleted.', type: GetUserByIdDto })
  deleteUser(@Param('id') id: string): GetUserByIdDto {
    return {} as any;
  }
}