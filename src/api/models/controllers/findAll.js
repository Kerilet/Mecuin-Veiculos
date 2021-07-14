const prisma = require('../../../core/prismaConfig')

module.exports = async(ctx) => {
  const models = await prisma.model.findMany();
  ctx.body = models;
};
