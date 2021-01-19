const router = require("express").Router();
const { main } = require("../controller/emailController");

router.post("/api/email", async (req, res) => {
  try {
    res.json(await main(req.body, req.body.email));
  } catch (error) {
    res.status(500);
  }
});

module.exports = router;
