const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middle = require("../middleware/auth")

router.post("/users", userController.createUser  )

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middle.mid, userController.getUserData)

router.put("/users/:userId",middle.mid, userController.updateUser)
router.delete("/users/:userId",middle.mid, userController.deleteUser)


module.exports = router;