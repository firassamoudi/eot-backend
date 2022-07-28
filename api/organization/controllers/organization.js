'use strict';

const _ = require('lodash');

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    findMapLocation: async ctx => {
        const result = await strapi
            .query('organization')
            .model
            .fetchAll({ columns: ['id', 'type']})
            .then((data) => {
                 let models = data.toJSON();
                 models = _.map(models, (elm) => {
                     const model = _.pick(elm, ['id', 'address', 'type']);
                     model.address = _.pick(model.address, ['latitude', 'longitude']);
                     return model;
                 });
                 return models;
             });
        ctx.send(result);
    }
};
