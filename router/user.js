const router = require('express').Router();
const {postuserinfo, getUserinfo, getsingleuser, deleteuser, updateuser} = require("../controller/user");

router.post("/postuserinfo", postuserinfo);
router.get("/getUserinfo", getUserinfo)
router.get("/singleuser/:id", getsingleuser);
router.delete("/deleteuser/:id", deleteuser);
router.put("/updateinfo/:id", updateuser);


module.exports = router;