import * as Mongoose from "mongoose";
let database: Mongoose.Connection;
export const connect = () => {
    // add your own uri below
    //const uri = "mongodb+srv://admin:kVnfRxgDwkWhTSnt@couponkeeper.0t2rt.mongodb.net/couponkeeper?retryWrites=true&w=majority";
    const uri = "mongodb://admin:kVnfRxgDwkWhTSnt@couponkeeper-shard-00-00.0t2rt.mongodb.net:27017,couponkeeper-shard-00-01.0t2rt.mongodb.net:27017,couponkeeper-shard-00-02.0t2rt.mongodb.net:27017/couponkeeper?ssl=true&replicaSet=atlas-89aokf-shard-0&authSource=admin&retryWrites=true&w=majority";
    if (database) {
        return;
    }
    Mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    }).catch(err => {
        console.error(err);
        return;
    });
    database = Mongoose.connection;
    database.once("open", async () => {
        //console.log("Connected to database");
    });
    database.on("error", () => {
        console.log("Error connecting to database");
    });
};
export const disconnect = () => {
    if (!database) {
        return;
    }
    Mongoose.disconnect();
};
