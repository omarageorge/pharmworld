const mongoose = require('mongoose');

const connectDB = async () => {
  const MONGO_URI =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGO_URI_PRODUCTION
      : process.env.MONGO_URI_DEVELOPMENT;

  try {
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
