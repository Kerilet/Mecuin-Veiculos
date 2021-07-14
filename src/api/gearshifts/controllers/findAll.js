const prisma = require('../../../core/prismaConfig')

module.exports = async(ctx) => {
  const gearshifts = await prisma.gearshift.findMany();
  ctx.body = gearshifts;
};
