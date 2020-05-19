const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("Hey yo, what's up?!");
});

module.exports = router;
