export default {
  id: 'default',
  url: process.env.MONGO_URL || 'mongodb://localhost:27017/tsed-api-boilerplate-local',
  connectionOptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
