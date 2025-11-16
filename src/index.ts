import express from "express";
import type { Application, Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
const app: Application = express();
const PORT = process.env.PORT || 7000;

// * Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req: Request, res: Response) => {
  return res.send("It's working 🙌");
});




app.listen(PORT, () => console.log(`Server is running on PORT ${PORT} - index.ts:20`));


app.get("/quote", (req: Request, res: Response) => {
  const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "It always seems impossible until it’s done.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Dream big and dare to fail."
  ];

  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});
