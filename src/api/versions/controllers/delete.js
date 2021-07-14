const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  await prisma.version.delete({
    where: { id },
  });
  ctx.status = 204;
  ctx.body = '';
};
