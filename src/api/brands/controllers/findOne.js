/* eslint-disable radix */
const prisma = require('../../../core/prismaConfig');

module.exports = async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [brand] = await prisma.brand.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = brand;
};
