import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();

app.use("*", cors({ origin: "*" }));

app.get("/health", async (req) => {
    return req.json({ message: "app is healthy", success: true });
})

export default app;