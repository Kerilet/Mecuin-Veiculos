const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [model] = await prisma.model.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = model;
};
