const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const id = Number.parseInt(ctx.params.id, 0);
  const color = await prisma.color.update({
    where: { id },
    data: ctx.request.body,
  });
  ctx.body = color;
};
