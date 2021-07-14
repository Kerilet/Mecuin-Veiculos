const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [color] = await prisma.color.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = color;
};
