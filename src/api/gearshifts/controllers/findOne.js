const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [gearshift] = await prisma.gearshift.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = gearshift;
};
