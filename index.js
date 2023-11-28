import express from 'express'
const app = express();

import connectDB from "./config/mongodb.js";
import userrouter from "./router/siswas.js";

const port = 3000;

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(userrouter);

//

app.get("/", (req, res) => {
  res.send("XII RPL 99_99_David Auditoree Martinz");
});

//

connectDB();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
