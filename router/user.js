const router = require('express').Router();
const {postuserinfo, getUserinfo} = require("../controller/user");

router.post("/postuserinfo", postuserinfo);
router.post("/getUserinfo", getUserinfo)


module.exports = router;