import type { MigrationInterface, QueryRunner } from 'typeorm';

import { data } from './data';

// eslint-disable-next-line @typescript-eslint/naming-convention
export class addDataToUsers1624957250517 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    const query: string = data
      .map(
        (
          u,
        ) => `insert into users ("first_name", "last_name", "email", "phone", "role")
                    values ('${u.firstName}', '${u.lastName}', '${u.email}', '${
          u.phone
        }', '${u.role || 'USER'}');`,
      )
      .join('');

    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DELETE FROM users`);
  }
}
