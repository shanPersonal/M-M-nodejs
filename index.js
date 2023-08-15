require("dotenv").config();
const express = require("express");
const sequelize = require('./config/db.config');
const app = express();
const port = process.env.PORT || 5000;

const connectWithDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection To Database Has Been Established');
  } catch (error) {
    console.log('There is some error in syncing models', error);
  }
}

connectWithDB();

const authRouter = require("./V1/Routes/Authroutes");
app.use(express.json());
// app.use(express.json())
app.use("/api/v1/auth", authRouter);

app.listen(port, ()=>{
  console.log(`server is running on this ${port} port`)
})

 