import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name?: string;

  @ApiProperty({
    example: 'GOOGLE',
    description: 'Authentication method',
    enum: ['GOOGLE', 'MAGIC_LINK'],
  })
  authenticationMethod: string;

  @ApiProperty({ example: 'John', description: 'The display name of the user' })
  displayName?: string;

  @ApiProperty({
    example: 'http://example.com/avatar.jpg',
    description: 'Avatar URL of the user',
  })
  avatarUrl?: string;

  @ApiProperty({ example: true, description: 'Is user an admin?' })
  admin?: boolean;
}

export class UpdateUserDto {
  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name?: string;

  @ApiProperty({
    example: 'GOOGLE',
    description: 'Authentication method',
    enum: ['GOOGLE', 'MAGIC_LINK'],
  })
  authenticationMethod: string;

  @ApiProperty({ example: 'John', description: 'The display name of the user' })
  displayName?: string;

  @ApiProperty({
    example: 'http://example.com/avatar.jpg',
    description: 'Avatar URL of the user',
  })
  avatarUrl?: string;

  @ApiProperty({ example: true, description: 'Is user an admin?' })
  admin?: boolean;
}

export class GetUserByIdDto {
  @ApiProperty({
    example: '1',
    description: 'The unique identifier of the user',
  })
  id: string;

  @ApiProperty({
    example: 'user@example.com',
    description: 'The email of the user',
  })
  email: string;

  @ApiProperty({
    example: 'GOOGLE',
    description: 'Authentication method',
    enum: ['GOOGLE', 'MAGIC_LINK'],
  })
  authenticationMethod: string;

  @ApiProperty({
    example: '{"providerId": "google123"}',
    description: 'The authentication profile of the user',
  })
  authenticationProfile?: string;

  @ApiProperty({ example: 'John Doe', description: 'The name of the user' })
  name?: string;

  @ApiProperty({ example: 'John', description: 'The display name of the user' })
  displayName?: string;

  @ApiProperty({
    example: 'http://example.com/avatar.jpg',
    description: 'Avatar URL of the user',
  })
  avatarUrl?: string;

  @ApiProperty({ example: true, description: 'Is user an admin?' })
  admin?: boolean;

  @ApiProperty({
    example: new Date().toISOString(),
    description: 'The date and time when the user was created',
  })
  createdAt?: Date;

  @ApiProperty({
    example: new Date().toISOString(),
    description: 'The date and time when the user was last updated',
  })
  updatedAt?: Date;

  @ApiProperty({
    example: null,
    description: 'The date and time when the user was deleted',
  })
  deletedAt?: Date;
}