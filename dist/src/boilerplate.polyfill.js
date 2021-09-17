"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("source-map-support/register");
const lodash_1 = require("lodash");
const typeorm_1 = require("typeorm");
const page_dto_1 = require("./common/dto/page.dto");
const PageMetaDto_1 = require("./common/dto/PageMetaDto");
const virtual_column_decorator_1 = require("./decorators/virtual-column.decorator");
Array.prototype.toDtos = function (options) {
    return lodash_1.compact(lodash_1.map(this, (item) => item.toDto(options)));
};
Array.prototype.toPageDto = function (pageMetaDto) {
    return new page_dto_1.PageDto(this.toDtos(), pageMetaDto);
};
typeorm_1.QueryBuilder.prototype.searchByString = function (q, columnNames) {
    if (!q) {
        return this;
    }
    this.andWhere(new typeorm_1.Brackets((qb) => {
        for (const item of columnNames) {
            qb.orWhere(`${item} ILIKE :q`);
        }
    }));
    this.setParameter('q', `%${q}%`);
    return this;
};
typeorm_1.SelectQueryBuilder.prototype.paginate = async function (pageOptionsDto) {
    const selectQueryBuilder = this.skip(pageOptionsDto.skip).take(pageOptionsDto.take);
    const itemCount = await selectQueryBuilder.getCount();
    const { entities, raw } = await selectQueryBuilder.getRawAndEntities();
    const items = entities.map((entitiy, index) => {
        var _a;
        const metaInfo = (_a = Reflect.getMetadata(virtual_column_decorator_1.VIRTUAL_COLUMN_KEY, entitiy)) !== null && _a !== void 0 ? _a : {};
        const item = raw[index];
        for (const [propertyKey, name] of Object.entries(metaInfo)) {
            entitiy[propertyKey] = item[name];
        }
        return entitiy;
    });
    const pageMetaDto = new PageMetaDto_1.PageMetaDto({
        itemCount,
        pageOptionsDto,
    });
    return { items, pageMetaDto };
};
//# sourceMappingURL=boilerplate.polyfill.js.map