const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Seed Users
  const user = await prisma.user.create({
    data: {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      password: 'hashedpassword123', // Remember to hash the password in production
      role: 'USER', // 'USER', 'DRIVER', or 'ADMIN'
    },
  });

  // Seed Routes
  const route = await prisma.route.create({
    data: {
      origin: 'New York',
      destination: 'Los Angeles',
      distance: 4000, // Distance in miles
      estimatedTime: '6 hours',
    },
  });

  // Seed Deliveries
  const delivery = await prisma.deliveries.create({
    data: {
      deliveryId: 'DEL12345',
      status: 'PENDING',
      driverId: user.id, // Use the driver you created earlier
      routeId: route.id, // Link to the route created
    },
  });

  console.log('Data seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
