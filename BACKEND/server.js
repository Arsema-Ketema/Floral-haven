import mongoose from 'mongoose';
import app from './app.js';
import config from './config/config.js';
import logger from './utils/logger.js';

// Database connection
const connectDB = async () => {
  try {
    await mongoose.connect(config.mongo.uri);
    logger.info('MongoDB connected successfully');
  } catch (err) {
    logger.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

// Start server
const startServer = async () => {
  await connectDB();
  
  const port = config.port || 3000;
  const server = app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
  });

  process.on('unhandledRejection', (err) => {
    logger.error('Unhandled Rejection:', err);
    server.close(() => process.exit(1));
  });
};

startServer();