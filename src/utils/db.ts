import mongoose, {ConnectionStates} from "mongoose";
import * as process from "process";

const connection = {
  isConnected: ConnectionStates.disconnected
};

const connect = async () => {

  console.log('URL: ', process.env.MONGO_DB_URL)
  if (connection.isConnected) {
    console.log("Already connected to the database.")
    return;
  }
  if (mongoose.connections.length > 0) {
    connection.isConnected = mongoose.connections[0].readyState;
    if (connection.isConnected === ConnectionStates.connected) {
        console.log('Use previous connection to the database')
      return;
    }
    await mongoose.disconnect();
  }

  mongoose.set("strictQuery", false);
  const db = await mongoose.connect(process.env.MONGO_DB_URL);
  console.log('New connection to the database.')
  connection.isConnected = db.connections[0].readyState;
}

const disconnect = async () => {
  if (connection.isConnected) {
    if (process.env.NODE_ENV === 'production') {
      await mongoose.disconnect();
      connection.isConnected = ConnectionStates.disconnected;
    } else {
      console.log('Not disconnected from the database')
    }
  }
}

const db = { connect, disconnect };
export default db