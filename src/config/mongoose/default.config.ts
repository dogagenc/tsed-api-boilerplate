export default {
  id: 'default',
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/tsed-server-boilerplate-local',
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
