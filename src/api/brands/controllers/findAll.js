const prisma = require('../../../core/prismaConfig')

module.exports = async(ctx) => {
  const brands = await prisma.brand.findMany();
  ctx.body = brands;
};
