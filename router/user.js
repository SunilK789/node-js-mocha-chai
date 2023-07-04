const router = require('express').Router();
const {postuserinfo, getUserinfo, getsingleuser, deleteuser} = require("../controller/user");

router.post("/postuserinfo", postuserinfo);
router.post("/getUserinfo", getUserinfo)
router.post("/singleuser/:id", getsingleuser);
router.post("/deleteuser/:id", deleteuser);


module.exports = router;