const prisma = require('../../../core/prismaConfig')

module.exports = async(ctx) => {
  const versions = await prisma.version.findMany();
  ctx.body = versions;
};
