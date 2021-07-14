const prisma = require('../../../core/prismaConfig');

module.exports = async (ctx) => {
  // eslint-disable-next-line radix
  const id = Number.parseInt(ctx.params.id, 0);
  await prisma.color.delete({
    where: { id },
  });
  ctx.status = 204;
  ctx.body = '';
};
