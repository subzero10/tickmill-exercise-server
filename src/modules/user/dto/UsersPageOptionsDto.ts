import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsEnum, IsOptional } from 'class-validator';

import { PageOptionsDto } from '../../../common/dto/PageOptionsDto';

export enum UserOrderBy {
  firstName = 'firstName',
  lastName = 'lastName',
  phone = 'phone',
  email = 'email',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export class UsersPageOptionsDto extends PageOptionsDto {
  @ApiPropertyOptional({
    enum: UserOrderBy,
    default: UserOrderBy.firstName,
  })
  @IsEnum(UserOrderBy)
  @IsOptional()
  readonly orderBy: UserOrderBy = UserOrderBy.firstName;
}
