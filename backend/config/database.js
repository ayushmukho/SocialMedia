const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose.set('strictQuery', true);
  mongoose
    .connect(process.env.MONGO_URI)
    .then((con) => console.log(`Database connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
