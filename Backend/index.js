import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRouter from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user_route.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const URI = process.env.MongoDBURI

app.use(cors());

app.use(express.json());
// MongoDB Connection
mongoose.connect(URI)
    .then(() => console.log("✅ Connected to MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));


//defining route

app.use("/book", bookRouter)

app.use("/user", userRoute)

// Start server
app.listen(port, () => {
    console.log(`🚀 Server running at: http://localhost:${port}`);
});

// Just one-time insert (e.g. in a temp route or in index.js for testing)
0
