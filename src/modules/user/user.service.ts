import { Injectable } from '@nestjs/common';
import { Brackets } from 'typeorm';

import type { PageDto } from '../../common/dto/page.dto';
import { PageMetaDto } from '../../common/dto/PageMetaDto';
import type { UserDto } from './dto/user-dto';
import { UsersPageDto } from './dto/UsersPageDto';
import type { UsersPageOptionsDto } from './dto/UsersPageOptionsDto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(public readonly userRepository: UserRepository) {}

  async getUsers(
    pageOptionsDto: UsersPageOptionsDto,
  ): Promise<PageDto<UserDto>> {
    let query = this.userRepository
      .createQueryBuilder('user')
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take)
      .where(
        new Brackets((qb) =>
          this.userRepository.applySearchCondition(qb, pageOptionsDto),
        ),
      );

    query = this.userRepository.addSortExpression(query, pageOptionsDto);
    const [users, usersCount] = await query.getManyAndCount();
    const pageMetaDto = new PageMetaDto({
      pageOptionsDto,
      itemCount: usersCount,
    });

    return new UsersPageDto(users.toDtos(), pageMetaDto);
  }
}
