import mongoose, { Mongoose } from "mongoose";



export default class db{
  private static connect:Mongoose
  public static async dbConnect(): Promise<Mongoose>{
    try {
      // Check if a connection already exists
      if (db.connect) {
        return db.connect;
      }
  
      // Establish a new connection
      db.connect = await mongoose.connect(String(process.env.MONGO_DB_CONNECTION_STRING));
  
      console.log("Connected to MongoDB:", db.connect?.connection?.host);
      return db.connect;
    } catch (err) {
      console.error("MongoDB connection error:", err);
      process.exit(1); // Exit the process if there's a connection error
    }

  }
}