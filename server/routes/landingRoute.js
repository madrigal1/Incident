const router = require("express").Router();

const { checkCat } = require("../controller/catController");
const { signIn, signInCallback } = require("../controller/oauthController");

router.get("/", checkCat);
router.get("/signIn", signIn);
router.get("/auth/google/callback", signInCallback);

module.exports = router;
