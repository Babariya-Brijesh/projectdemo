const express = require('express')
const app = express()
const dataRoutes = require("./routes/data");

const port = 3000

app.use("/", dataRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})