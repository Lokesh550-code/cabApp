import app from "./src/app.js";
import connectDB from "./src/db/db.js";
import "dotenv/config";

const PORT = process.env.PORT || 3000;
const DB_URL = process.env.MONGODB_URL;

connectDB(DB_URL);

app.listen(PORT, () => {
  console.log(`The server is listening on localhost:${PORT}`);
});
