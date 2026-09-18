import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('password123', 10);

  const users = [
    {
      name: 'Admin User',
      email: 'admin@pggc46.edu.in',
      passwordHash: password,
      role: 'ADMIN' as const,
      studentId: 'ADMIN-001',
      department: 'Administration',
      isActive: true,
    },
    {
      name: 'Program Officer',
      email: 'po@pggc46.edu.in',
      passwordHash: password,
      role: 'PO' as const,
      studentId: 'PO-001',
      department: 'NSS',
      isActive: true,
    },
    {
      name: 'Leader One',
      email: 'leader@pggc46.edu.in',
      passwordHash: password,
      role: 'LEADER' as const,
      studentId: 'LEADER-001',
      department: 'Computer Science',
      isActive: true,
    },
    {
      name: 'Volunteer One',
      email: 'volunteer@pggc46.edu.in',
      passwordHash: password,
      role: 'VOLUNTEER' as const,
      studentId: 'VOL-001',
      department: 'Political Science',
      isActive: true,
    },
  ];

  for (const user of users) {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user,
    });
  }

  console.log('Seeded NSS demo users successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
