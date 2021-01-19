const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const emailSender = require("./routes/email");

app.use(express.json());

app.use("/", emailSender);

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
