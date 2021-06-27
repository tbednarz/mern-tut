const express = require("express");
const mongoose = require("mongoose");

const items = require("./routes/api/items");

const app = express();

//bodyparser middleware
app.use(express.json());
//DB config
const db = require("./config/keys").mongoURI;

// Connect to mongodb
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => {
    console.log("db connected");
  })
  .catch((err) => console.log(err));
//use routes
app.use(items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
