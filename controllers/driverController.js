const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getDrivers = async (req, res, next) => {
  try {
    // Fetch all drivers
    const drivers = await prisma.user.findMany({
      where: {
        role: 'DRIVER',  // Only fetch users with the role 'DRIVER'
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        vehicle: true,
        licenseNumber: true,
        status: true, 
      },
    });

    if (drivers.length === 0) {
      return res.status(404).json({
        message: 'No drivers found',
      });
    }

    return res.status(200).json({
      message: 'Drivers fetched successfully',
      drivers,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDrivers };
