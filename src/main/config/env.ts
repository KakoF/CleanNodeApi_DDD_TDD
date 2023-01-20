export default {
  mongUrl: process.env.MONGO_URL ?? 'mongodb://root:example@localhost:27017/clean_node_api?authSource=admin',
  // mongUrl: process.env.MONGO_URL ?? 'mongo://root:example@mongo:27017/node_api_clean?authSource=admin',
  // mongUrl: process.env.MONGO_URL ?? 'mongo://root:example@mongo:27017/clean_node_api',
  port: process.env.PORT ?? 5050
}
