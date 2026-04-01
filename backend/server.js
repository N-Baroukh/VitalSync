const express = require("express");
const app = express();
// backend/server.js
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date(), version: "v1" });
});
app.get("/api/activities", (req, res) => {
    res.json([]);
});
app.listen(3000, () => console.log("VitalSync API on :3000"));
