import type { WhereExpression } from 'typeorm';
import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import type { SelectQueryBuilder } from 'typeorm/query-builder/SelectQueryBuilder';

import { Order } from '../../common/constants/order';
import type { UsersPageOptionsDto } from './dto/UsersPageOptionsDto';
import { UserOrderBy } from './dto/UsersPageOptionsDto';
import { UserEntity } from './user.entity';

// eslint-disable-next-line @typescript-eslint/no-unused-vars-experimental
export function ensureExhaustiveSwitch(x: never): never {
  throw new Error('ensureExhaustiveSwitch');
}

@EntityRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {
  applySearchCondition(qb: WhereExpression, pageOptions: UsersPageOptionsDto) {
    if (pageOptions.q) {
      qb.where(
        `(user.first_name ILIKE :q
                          OR user.last_name ILIKE :q
                          OR user.email ILIKE :q)`,
        { q: `%${pageOptions.q}%`, lowerQ: pageOptions.q.toLowerCase() },
      );
    }
  }
  addSortExpression(
    queryBuilder: SelectQueryBuilder<UserEntity>,
    pageOptions: UsersPageOptionsDto,
  ): SelectQueryBuilder<UserEntity> {
    const nulls =
      pageOptions.order === Order.ASC ? 'NULLS LAST' : 'NULLS FIRST';

    switch (pageOptions.orderBy) {
      case UserOrderBy.firstName:
      case UserOrderBy.lastName:
      case UserOrderBy.email:
      case UserOrderBy.phone:
      case UserOrderBy.createdAt:
      case UserOrderBy.updatedAt:
        return queryBuilder.orderBy(
          'user.' + pageOptions.orderBy,
          pageOptions.order,
          nulls,
        );
      default:
        ensureExhaustiveSwitch(pageOptions.orderBy);
    }
  }
}
