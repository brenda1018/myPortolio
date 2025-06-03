import { connect } from 'mongoose';

const MONGODB_URI = "mongodb+srv://Cluster90226:mango12@cluster90226.m9nffmh.mongodb.net/mean?retryWrites=true&w=majority&appName=Cluster90226";
const connectDB = async () => {
try {
  await connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  });
  console.log('MongoDB connected');
} catch (error) {
  console.error('MongoDB connection error:', error);
  process.exit(1);
}
};

const _connectDB = connectDB;
export { _connectDB as connectDB };

// refine after we make the connection 