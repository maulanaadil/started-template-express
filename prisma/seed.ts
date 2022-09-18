import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seed() {
  const user = await prisma.user.upsert({
    where: { email: "nata@express.com" },
    update: {},
    create: {
      email: "nata@express.com",
      name: "Natasya",
    },
  });

  console.log(`${user} has been created 🙌`);
}

seed()
  .catch((e: Error) => {
    console.error(e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
