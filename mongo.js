const mongoose = require("mongoose");
const env = require("./env/environment");

mongoose.Promise = global.Promise;

const mongoUri = env.mongoUri;

function connect() {
  return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    auth: { user: env.dbName, password: env.key }
  });
}

module.exports = {
  connect,
  mongoose
};
