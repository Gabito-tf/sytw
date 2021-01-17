module.exports = {
  PORT: process.env.PORT || 3000,
  DB: 'mongodb://admin:123321@cluster0-shard-00-00.nmvma.mongodb.net:27017,cluster0-shard-00-01.nmvma.mongodb.net:27017,cluster0-shard-00-02.nmvma.mongodb.net:27017/Appuntes?ssl=true&replicaSet=atlas-se3399-shard-0&authSource=admin&retryWrites=true&w=majorityclear'
}