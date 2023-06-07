const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/userController')

// router.post('/', (req, res) => {
//     res.send('Register Route') })
router.post('/', registerUser) // import userController.js

router.post('/login', loginUser)

module.exports = router