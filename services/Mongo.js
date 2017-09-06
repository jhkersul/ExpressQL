import mongoose from 'mongoose';

export const connectToMongo = (server) => {
  // Connecting to MongoDB
  console.info(`Connecting to Mongo: ${server}`);
  mongoose.connect(server, {
    useMongoClient: true,
  });
};

export const NONE = 'NONE';
