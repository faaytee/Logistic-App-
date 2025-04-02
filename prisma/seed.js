const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');  // Import bcrypt to hash passwords
const { v4: uuidv4 } = require('uuid');  // Import uuid to generate unique delivery IDs
const prisma = new PrismaClient();

async function main() {
  // Seed Users (Regular User)
  const user = await prisma.user.create({
    data: {
      fullName: 'Sarah Williams',
      email: 'sarah.williams@example.com',
      password: 'hashedpassword123', // Note: this will not be hashed directly, as we will hash later
      role: 'USER', // 'USER', 'DRIVER', or 'ADMIN'
    },
  });

  // Seed Drivers
  const driverPassword = await bcrypt.hash('driverpassword123', 10); // Hash the driver password
  const driver1 = await prisma.user.create({
    data: {
      fullName: 'Michael Johnson',
      email: 'michael.johnson@example.com',
      password: driverPassword,
      role: 'DRIVER',
      licenseNumber: 'AB12345CD',
      vehicle: 'Ford Transit',
      status: 'AVAILABLE', // Mark driver as available
    },
  });

  const driver2 = await prisma.user.create({
    data: {
      fullName: 'Emily Davis',
      email: 'emily.davis@example.com',
      password: driverPassword,
      role: 'DRIVER',
      licenseNumber: 'XY98765LM',
      vehicle: 'Mercedes Sprinter',
      status: 'AVAILABLE', // Mark driver as available
    },
  });

  // Seed Routes
  const route = await prisma.route.create({
    data: {
      origin: 'Chicago',
      destination: 'Dallas',
      distance: 800, // Distance in miles
      estimatedTime: '12 hours',
    },
  });

  // Seed Deliveries (Using uuid for unique deliveryId)
  const delivery = await prisma.deliveries.create({
    data: {
      deliveryId: uuidv4(),  // Generate a unique deliveryId
      status: 'PENDING',
      driverId: driver1.id, // Assign Michael Johnson to this delivery
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
