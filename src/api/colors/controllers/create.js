const prisma = require('../../../core/prismaConfig');

module.exports = async (ctx) => {
  const colors = await prisma.color.create({
    data: ctx.request.body,
  });
  ctx.status = 201;
  ctx.body = colors;
};
