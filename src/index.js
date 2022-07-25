const express = require("express");
const app = express();
const route = require("./routes/routedem");
const cors = require("cors");
const BodyParser = require("body-parser");
app.use(BodyParser.json());

const PORT = process.env.PORT || 8080;
app.use(cors());
app.use(express.static("public"));

app.use("/", route);
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
