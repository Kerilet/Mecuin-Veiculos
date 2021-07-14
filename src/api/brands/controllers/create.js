const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const brands = await prisma.brand.create({
    data: ctx.request.body,
  });
  ctx.body = brands;
};
