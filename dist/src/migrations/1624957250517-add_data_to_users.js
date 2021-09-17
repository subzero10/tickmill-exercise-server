"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDataToUsers1624957250517 = void 0;
const data_1 = require("./data");
class addDataToUsers1624957250517 {
    async up(queryRunner) {
        const query = data_1.data
            .map((u) => `insert into users ("first_name", "last_name", "email", "phone", "role")
                    values ('${u.firstName}', '${u.lastName}', '${u.email}', '${u.phone}', '${u.role || 'USER'}');`)
            .join('');
        await queryRunner.query(query);
    }
    async down(queryRunner) {
        await queryRunner.query(`DELETE FROM users`);
    }
}
exports.addDataToUsers1624957250517 = addDataToUsers1624957250517;
//# sourceMappingURL=1624957250517-add_data_to_users.js.map