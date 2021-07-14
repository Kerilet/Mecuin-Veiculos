const prisma = require('../../../core/prismaConfig')

module.exports = async(ctx) => {
  const colors = await prisma.color.findMany();
  ctx.body = colors;
};
