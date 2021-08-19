const prisma = require('../../../core/prismaConfig');

module.exports = async (ctx) => {
  const gearshifts = await prisma.gearshift.create({
    data: ctx.request.body,
  });
  ctx.status = 201;
  ctx.body = gearshifts;
};
