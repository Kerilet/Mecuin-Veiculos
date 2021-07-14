const prisma = require('../../../core/prismaConfig')

module.exports = async (ctx) => {
  const urlId = Number.parseInt(ctx.params.id, 0);
  const [version] = await prisma.version.findMany({
    where: {
      id: urlId,
    },
  });
  ctx.body = version;
};
