const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

prisma.user
  .update({
    where: { email: "yangrijo@gmail.com" },
    data: { role: "ADMIN" },
  })
  .then((u) => console.log("promovido:", u.email, u.role))
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());