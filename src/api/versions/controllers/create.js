const prisma = require('../../../core/prismaConfig');

module.exports = async (ctx) => {
  const versions = await prisma.version.create({
    data: ctx.request.body,
  });
  ctx.status = 201;
  ctx.body = versions;
};
