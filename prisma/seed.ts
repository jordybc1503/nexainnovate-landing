import { PrismaClient, Role } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const adminEmail = 'admin@nexa.dev'
  const password = await bcrypt.hash('admin123', 10)

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: { email: adminEmail, name: 'Admin', role: Role.ADMIN, password }
  })

  console.log('Seed completed')
}

main().finally(() => prisma.$disconnect())

