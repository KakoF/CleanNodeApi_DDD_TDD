export default {
  mongUrl: process.env.MONGO_URL ?? 'mongodb://root:example@localhost:27017/clean_node_api?authSource=admin',
  port: process.env.PORT ?? 5050
}
