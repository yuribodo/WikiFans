import express = require("express");
import { routes } from "./routes";
const cors = require('cors')



const app = express()

app.use(cors())

app.use(express.json());

app.use(routes)

app.listen(3333, () => console.log("Server is running on port 3333!!!"))