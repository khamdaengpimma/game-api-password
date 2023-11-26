const express = require('express');
const { password } = require('./password');
app = express()
const PORT = 8080
app.use(express.json());
app.get("/", (req, res) => {
  res.send("connect")
})
app.get("/:password", password)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})