/* eslint-disable no-unused-vars */
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seed() {
  // Colors
  const white = await prisma.color.upsert({
    where: { title: 'Branco' },
    update: {},
    create: { title: 'Branco' },
  });

  const black = await prisma.color.upsert({
    where: { title: 'Preto' },
    update: {},
    create: { title: 'Preto' },
  });

  const silver = await prisma.color.upsert({
    where: { title: 'Prata' },
    update: {},
    create: { title: 'Prata' },
  });

  const red = await prisma.color.upsert({
    where: { title: 'Vermelho' },
    update: {},
    create: { title: 'Vermelho' },
  });

  const blue = await prisma.color.upsert({
    where: { title: 'Azul' },
    update: {},
    create: { title: 'Azul' },
  });

  // Brands
  const fiat = await prisma.brand.upsert({
    where: { title: 'Fiat' },
    update: {},
    create: { title: 'Fiat' },
  });

  const chevrolet = await prisma.brand.upsert({
    where: { title: 'Chrevolet' },
    update: {},
    create: { title: 'Chrevolet' },
  });

  const honda = await prisma.brand.upsert({
    where: { title: 'Honda' },
    update: {},
    create: { title: 'Honda' },
  });

  const ford = await prisma.brand.upsert({
    where: { title: 'Ford' },
    update: {},
    create: { title: 'Ford' },
  });

  const volkswagen = await prisma.brand.upsert({
    where: { title: 'Volkswagen' },
    update: {},
    create: { title: 'Volkswagen' },
  });

  // Models
  const uno = await prisma.model.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Uno',
      brandId: fiat.id,
    },
  });

  const onix = await prisma.model.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Onix',
      brandId: chevrolet.id,
    },
  });

  const civic = await prisma.model.upsert({
    where: { id: 3 },

    update: {},
    create: {
      title: 'Civic',
      brandId: honda.id,
    },
  });

  const ka = await prisma.model.upsert({
    where: { id: 4 },

    update: {},
    create: {
      title: 'Ka',
      brandId: ford.id,
    },
  });

  const passat = await prisma.model.upsert({
    where: { id: 5 },

    update: {},
    create: {
      title: 'Passat',
      brandId: volkswagen.id,
    },
  });

  // Versions
  const way13 = await prisma.version.upsert({
    where: { id: 1 },
    update: {},
    create: {
      title: 'Way 13',
      modelId: uno.id,
    },
  });

  const premier = await prisma.version.upsert({
    where: { id: 2 },
    update: {},
    create: {
      title: 'Premier',
      modelId: onix.id,
    },
  });

  const exl = await prisma.version.upsert({
    where: { id: 3 },
    update: {},
    create: {
      title: 'EXL',
      modelId: civic.id,
    },
  });

  const s10 = await prisma.version.upsert({
    where: { id: 4 },
    update: {},
    create: {
      title: 'S1.0',
      modelId: ka.id,
    },
  });

  const b7 = await prisma.version.upsert({
    where: { id: 5 },
    update: {},
    create: {
      title: 'B7',
      modelId: passat.id,
    },
  });

  // Gearshifts
  const automatic = await prisma.gearshift.upsert({
    where: { title: 'Automático' },
    update: {},
    create: { title: 'Automático' },
  });

  const manual = await prisma.gearshift.upsert({
    where: { title: 'Manual' },
    update: {},
    create: { title: 'Manual' },
  });

  const semiAutomatic = await prisma.gearshift.upsert({
    where: { title: 'Semi Automático' },
    update: {},
    create: { title: 'Semi Automático' },
  });

  const automatized = await prisma.gearshift.upsert({
    where: { title: 'Automatizado' },
    update: {},
    create: { title: 'Automatizado' },
  });

  const semiAutomatized = await prisma.gearshift.upsert({
    where: { title: 'Semi Automatizado' },
    update: {},
    create: { title: 'Semi Automatizado' },
  });

  // Optionals

  // Vehicles
}

seed()
  .catch((e) => {
    // eslint-disable-next-line no-console
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
