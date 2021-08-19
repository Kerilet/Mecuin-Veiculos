const prisma = require('../../../core/prismaConfig');

module.exports = async (ctx) => {
  const models = await prisma.model.create({
    data: ctx.request.body,
  });
  ctx.status = 201;
  ctx.body = models;
};
